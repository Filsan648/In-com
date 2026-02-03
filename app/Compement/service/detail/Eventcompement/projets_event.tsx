import React from "react";
import Title from "~/Compement/asset/Tile";



function Projet_event({projets,title}:{projets:Array<any>,title:string}) {
  return (
    <div className=" min-h-screen  "  >
            <div className="text-center">
    <Title title={title} subtitle="Projets" />
        </div>
       {projets.map((project, idx) => (
        <section key={project.id} className={` ${project.bg} mt-6 px-6 min-h-screen relative flex flex-col justify-center py-10 border-b border-white/5`}>
          <div className="  mb-16">
            <div className="max-w-xl">
  
              <h2 className="text-xl md:text-3xl  tracking-tighter  leading-none">
                {project.name}
              </h2>
               
            </div>
           <p className=" text-sm pt-3 text-black/80   ">  {project.description} </p>
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