import React from "react";
import Title from "~/Compement/asset/Tile";
// Tes imports d'images
import image1 from "app/asset/project/event/image1.png";
import image2 from "app/asset/project/event/image2.png";
import image3 from "app/asset/project/event/image3.png";
import image4 from "app/asset/project/event/image4.png";
import image5 from "app/asset/project/event/image5.png";
import image6 from "app/asset/project/event/image6.png";
import image7 from "app/asset/project/event/image7.png";
import image8 from "app/asset/project/event/image8.png";
import image9 from "app/asset/project/event/image9.png";
import image10 from "app/asset/project/event/image10.png";
import image11 from "app/asset/project/event/image11.png";
import bg from "app/asset/background/image.png"
const projects = [
  { id: "01", name: "L’organisation du 16ᵉ Forum de Haut Niveau du Secteur Privé de l’Union africaine", images: [image1, image10,image2 ], color: "#e5e5e5",bg:"bg-[#801010] " },
  { id: "02", name: "Salon du Tourisme Djibouti 2025", images: [image11, image4, image5], color: "#d1d1d1" },
  { id: "03", name: "VORTEX", images: [image7, image8, image9], color: "#b5b5b5",bg:"bg-[#801010] " },
];

function Projet_event() {
  return (
    <div className=" min-h-screen  "  >
            <div className="text-center">
    <Title title="Nos réalisations in event" subtitle="Projets" />
        </div>
       {projects.map((project, idx) => (
        <section key={project.id} className={` ${project.bg} mt-6 px-6 min-h-screen relative flex flex-col justify-center py-10 border-b border-white/5`}>
          <div className="flex justify-between items-end mb-16">
            <div className="max-w-xl">
              <span className="text-[#801010] font-mono mb-4 block tracking-widest">// PROJECT  {project.id}</span>
              <h2 className="text-2xl md:text-3xl  tracking-tighter uppercase leading-none">
                {project.name}
              </h2>
            </div>
          
          </div>

          <div className="relative h-[70vh] w-full grid grid-cols-12 gap-6">

            <div className="col-span-12 md:col-span-7 h-full overflow-hidden relative group">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              <img 
                src={project.images[0]} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-[2s] ease-out" 
                alt="Main"
              />
            </div>

            <div className="hidden md:block md:col-span-3 h-3/4 self-center overflow-hidden translate-y-12">
               <img 
                src={project.images[1]} 
                className="w-full h-full object-cover brightness-75 hover:brightness-100 transition-all duration-700" 
                alt="Detail"
              />
            </div>

            <div className="hidden md:block md:col-span-2 h-1/2 self-end overflow-hidden border-l border-white/10 pl-6">
               <img 
                src={project.images[2]} 
                className="w-full h-full object-cover " 
                alt="Side"
              />
               <p className="mt-4 text-[10px] uppercase tracking-[0.3em] opacity-50">Discovery View</p>
            </div>

          </div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none overflow-hidden w-full text-center">
            <span className="text-[20vw] font-bold text-white/[0.02] leading-none whitespace-nowrap">
                {project.name} {project.name}
            </span>
          </div>

        </section>
      ))}

    </div>
  );
}

export default Projet_event;