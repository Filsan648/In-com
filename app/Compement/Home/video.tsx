import { useRef, useState, useEffect } from "react";
import income_video from "app/asset/video/income.mp4";

function CircularText({ text, isPlaying }: { text: string; isPlaying: boolean }) {
  const letters = text.split("");
  const angleStep = 360 / letters.length;

  return (
    <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-700 ${isPlaying ? 'opacity-0' : 'opacity-100'}`}>
      <div className="relative w-48 h-48 animate-spin-slow">
        {letters.map((letter, index) => (
          <span
            key={index}
            className="absolute left-1/2 top-0 origin-[0_96px] text-lg font-medium uppercase tracking-widest text-white"
            style={{ transform: `rotate(${angleStep * index}deg)` }}
          >
            {letter}
          </span>
        ))}
      </div>
    </div>
  );
}

function Video() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) videoRef.current.pause();
    else videoRef.current.play();
    setIsPlaying(!isPlaying);
  };

  // Effet de parallaxe/suivi pour le bouton (Optionnel style Awwwards)
  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = (clientX - left - width / 2) * 0.15;
    const y = (clientY - top - height / 2) * 0.15;
    setMousePos({ x, y });
  };

  const resetMouse = () => setMousePos({ x: 0, y: 0 });

  return (
    <div className="w-full md:min-h-screen  flex items-center justify-center px-6">
      <div 
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={resetMouse}
        className="relative rounded-md w-full  aspect-[16/9] overflow-hidden group "
      >
        {/* Effet de Grain (Texture Awwwards) */}
        <div className="absolute inset-0 z-10 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

        {/* Vidéo avec filtre subtil */}
        <video
          ref={videoRef}
          
          loop
          
          playsInline
          className={`w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105 ${!isPlaying ? 'grayscale-[0.5] blur-[2px]' : ''}`}
        >
          <source src={income_video} type="video/mp4" />
        </video>

   
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 pointer-events-none" />

     
        <button
          onClick={togglePlay}
          style={{ transform: `translate(${mousePos.x}px, ${mousePos.y}px)` }}
          className="absolute inset-0 m-auto z-20 w-32 h-32 flex items-center justify-center transition-all duration-300 ease-out"
        >
          <div className="absolute inset-0 bg-black backdrop-blur-md rounded-full border border-black scale-100 group-hover:scale-110 transition-transform duration-500" />
          
          <CircularText text="• PLAY • EXPLORE • VIEW • REPLAY " isPlaying={isPlaying} />
          
          <div className="relative z-30 transition-all duration-500 overflow-hidden h-8 w-8 flex flex-col items-center">
             <div className={`transition-transform duration-500 ease-in-out ${isPlaying ? '-translate-y-1/2' : 'translate-y-0'}`}>
                <span className="h-8 flex items-center text-white text-xl">▶</span>
                <span className="h-8 flex items-center text-white text-sm font-bold tracking-tighter">II</span>
             </div>
          </div>
        </button>


        <div className="absolute bottom-8 left-10 z-20 flex flex-col gap-1 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
          <span className="text-[10px] uppercase tracking-[0.3em] font-light"> in’MOTION – Notre histoire en images</span>
          <h2 className="text-2xl font-serif italic uppercase">Plongez dans l’univers in’COM</h2>
        </div>
      </div>

      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }
      `}</style>
    </div>
  );
}

export default Video;