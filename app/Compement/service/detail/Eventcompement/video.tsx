import event_prep from "app/asset/project/event/VIDEO.mp4";

function Video() {
  return (
    <div className="group bg-[#801010] relative min-h-screen w-full flex flex-col items-center justify-center px-6">
      
      {/* Lignes de structure (Grid lines) - Très Awwwards */}
      <div className="absolute inset-0 flex justify-between px-[10%] pointer-events-none">
        <div className="w-[1px] h-full bg-black/[0.03]" />
        <div className="w-[1px] h-full bg-black/[0.03]" />
      </div>

      <div className="relative w-full max-w-6xl grid grid-cols-12 gap-4">
        
   

        {/* Le Container Vidéo "The Frame" */}
        <div className="col-span-12 md:col-span-9 relative aspect-[16/9] overflow-hidden bg-black ">
          <video
            muted
            autoPlay
            loop
            playsInline
            className="h-full w-full object-cover transition-transform duration-[2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
          >
            <source src={event_prep} type="video/mp4" />
          </video>
          
          {/* Badge de statut en haut à droite */}
          <div className="absolute top-6 right-6 flex items-center gap-2 mix-blend-difference text-white">
            <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
            <span className="text-[10px] tracking-widest uppercase">Live Capture</span>
          </div>
        </div>

        {/* Bloc Texte décalé (Asymétrie) */}
        <div className="col-span-12 md:col-span-3 flex flex-col justify-end pt-8 md:pt-0 md:pl-8">
          <div className="h-[1px] w-12 bg-black mb-6 transition-all duration-700 group-hover:w-full" />
          <h2 className="text-4xl font-light leading-[0.9] tracking-tighter text-black">
            ÉVÉNEMENT <br />
            <span className="font-serif italic pt-2 text-yellow-500/60">PRÉPARATION</span>
          </h2>
          <p className="mt-6 text-[13px] leading-relaxed text-black/90 max-w-[200px]">
            Exploration du mouvement et de la préparation à travers un regard cinématographique.
          </p>
       
        </div>

      </div>

      {/* Signature verticale en bas à gauche */}
      <div className="absolute bottom-10 left-10 overflow-hidden">
        <p className="text-[10px] tracking-[0.2em] uppercase origin-left -rotate-90 translate-y-full transition-transform duration-1000 delay-500 group-hover:translate-y-0">
          Awwwards / Special Mention
        </p>
      </div>

    </div>
  );
}

export default Video;