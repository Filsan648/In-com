import { useState } from "react";

function Footer() {
  return (
    <footer className="relative border-t bg-white text-black pt-32 pb-10 px-6 md:px-16 ">
      <div className="max-w-[1800px] mx-auto">
        
        {/* TOP SECTION: THE STATEMENT */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 mb-2">
          <div className="md:col-span-7">
            <h2 className="text-[8vw] md:text-[6vw] leading-[0.9]  tracking-tighter uppercase">
              Élevons votre <br /> 
              <span className="text-[#801010]">potentiel.</span>
            </h2>
          </div>
          
          <div className="md:col-span-5 flex flex-col justify-end items-start md:items-end">
            <p className="text-lg md:text-xl max-w-sm md:text-right leading-relaxed mb-8">
              In Spired Partnership , In Icredible Result
            </p>
            <a href="mailto:contact@cabinet.com" className="group relative text-2xl font-medium overflow-hidden">
              <span className="inline-block transition-transform duration-500 group-hover:-translate-y-full">contact@cabinet.com</span>
              <span className="absolute top-0 left-0 inline-block transition-transform duration-500 translate-y-full group-hover:translate-y-0 underline underline-offset-8">Discuter du projet</span>
            </a>
          </div>
        </div>

        {/* MIDDLE SECTION: THE GRID SYSTEM */}
        <div className="grid grid-cols-2 md:grid-cols-4  border-black pt-16 gap-y-16">
          <div className="flex flex-col gap-6">
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-400">Navigation</h4>
            <ul className="space-y-3 text-sm font-medium">
              <li className="hover:pl-2 transition-all duration-300 cursor-pointer">L'Expertise</li>
              <li className="hover:pl-2 transition-all duration-300 cursor-pointer">Le Cabinet</li>
              <li className="hover:pl-2 transition-all duration-300 cursor-pointer">Études de cas</li>
              <li className="hover:pl-2 transition-all duration-300 cursor-pointer">Actualités</li>
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-400">Bureaux</h4>
            <ul className="space-y-3 text-sm">
              <li>Paris — Avenue Montaigne</li>
              <li>Genève — Rue du Rhône</li>
              <li>Luxembourg — Kirchberg</li>
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-400">Suivre</h4>
            <ul className="space-y-3 text-sm font-medium">
              <li className="cursor-pointer flex items-center gap-2 group">
                <div className="w-0 h-[1px] bg-black group-hover:w-4 transition-all duration-300"></div>
                LinkedIn
              </li>
              <li className="cursor-pointer flex items-center gap-2 group">
                <div className="w-0 h-[1px] bg-black group-hover:w-4 transition-all duration-300"></div>
                Twitter (X)
              </li>
              <li className="cursor-pointer flex items-center gap-2 group">
                <div className="w-0 h-[1px] bg-black group-hover:w-4 transition-all duration-300"></div>
                Instagram
              </li>
            </ul>
          </div>

          
        </div>

        {/* BOTTOM SECTION: COPYRIGHT */}
        <div className="mt-40 pt-8 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-[10px] tracking-widest uppercase">© 2026 Cabinet de Conseil de Luxe</span>
          <div className="flex gap-10 text-[10px] tracking-widest uppercase">
            <span className="cursor-pointer hover:text-zinc-400 transition-colors">Politique de Cookies</span>
            <span className="cursor-pointer hover:text-zinc-400 transition-colors">RGPD</span>
          </div>
          <span className="text-[10px] tracking-widest uppercase">Propulsé par Gemini 3 Flash</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;