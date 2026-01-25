import video from "app/asset/univers/adn.mp4"
import Title from "../asset/Tile";
import { useRef, useState  } from "react";
function Adn(){
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
   const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) videoRef.current.pause();
    else videoRef.current.play();
    setIsPlaying(!isPlaying);
  };
return(
    <div className="flex md:flex-row flex-col px-6"> 
         <div className="md:w-1/2"> 
             <Title title=" Un ADN fort. Une signature unique !"   subtitle="Notre ADN " />
            
            <p className="pt-5 text-lg"> Tout part d’une conviction : une marque doit exister pleinement visuellement, émotionnellement, et stratégiquement. Notre ADN repose sur l’intégration totale : chaque pôle (Design, Print, Prod, Event, Connect, Voice, Influence) travaille en synergie pour produire un résultat cohérent et mesurable.
 <br/> <br/>
Notre univers “in” traduit une vision claire : l’immersion dans la culture des marques que nous servons, l’intelligence dans nos choix créatifs et stratégiques, et l’impact dans les résultats que nous délivrons. C’est cette alliance entre fond et forme, émotion et efficacité, qui fait la signature in’COM. </p> </div>

         <div className="md:w-1/2 w-full h-screen md:px-28 relative">
          <video  ref={videoRef}
        
          loop
          
          playsInline  className="w-full h-full object-cover" > <source src={video}/>  </video> 
          
          
          
             <button
          onClick={togglePlay}

          className="absolute inset-0 m-auto z-20 w-20 h-20 flex items-center justify-center transition-all duration-300 ease-out"
        >
          <div className="absolute inset-0 bg-black backdrop-blur-md rounded-full border border-black scale-100 group-hover:scale-110 transition-transform duration-500" />
          
        
          
          <div className="relative z-30 transition-all duration-500 overflow-hidden h-8 w-8 flex flex-col items-center">
             <div className={`transition-transform duration-500 ease-in-out ${isPlaying ? '-translate-y-1/2' : 'translate-y-0'}`}>
                <span className="h-8 flex items-center text-white text-xl">▶</span>
                <span className="h-8 flex items-center text-white text-sm font-bold tracking-tighter">II</span>
             </div>
          </div>
        </button>

          </div>

    </div>
) 
}
export default Adn;



