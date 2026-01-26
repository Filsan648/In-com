import Title from "../asset/Tile";
import { useState } from "react";
const content=[
    {
title:'Créativité',
content:'Une énergie libre, nourrie par la curiosité, l’audace et l’envie de surprendre. Chaque concept est pensé pour être singulier, percutant et utile. Créer, c’est oser sortir du cadre tout en gardant le sens.'
    },
    {
        title:'Engagement',
        content:'Un engagement constant envers la qualité, la cohérence et la fiabilité. Chaque projet est mené avec précision, chaque rendu reflète une exigence assumée. C’est la discipline qui transforme une idée forte en résultat concret.'
    },
    {title:'Engagement',
     content:'Une relation fondée sur la confiance, la transparence et la responsabilité. S’impliquer à 100 %, c’est comprendre les enjeux, partager la vision et accompagner la réussite. Chaque collaboration est une alliance, un partenariat, pas juste une simple prestation.',

    },
    {title:'Flexibilité'
     ,content:'Une capacité à s’adapter sans jamais se dénaturer. Aller vite, sans précipitation. Réagir, sans perdre la direction. Notre agilité repose sur une organisation intégrée, pensée pour évoluer avec chaque client.'}
]
function Valeur (){
const [openIndex, setOpenIndex] = useState(null)

const togglePlay = (index) => {
setOpenIndex(prev => (prev === index ? null : index))
}
return(
    <div className="px-6 bg-[#801010]  py-10 grid  md:grid-cols-2 grid-cols-1 ">
        <div>
 <p className="text-sm p-2 uppercase text-yellow-500/60">Nos Valeurs</p>
 <Title title=" Flexibilité, Rigueur, créativité, engagement."   subtitle="" />

</div>

<div>
{content.map((item, index) => {
  const isOpen = openIndex === index;

  return (
    <div
      key={index}
      className="group border-b border-white/10 py-8 transition-colors duration-500 hover:border-yellow-500/40"
    >
      {/* Title */}
      <button
        onClick={() => togglePlay(index)}
        className="w-full flex items-center justify-between text-left"
      >
        <h3 className="text-xl md:text-2xl font-light tracking-tight  group-hover:text-yellow-500/80 transition-colors duration-500">
          {item.title}
        </h3>

        {/* Indicator */}
        <span
          className={`ml-6 text-xl transition-transform duration-500 ${
            isOpen ? "rotate-45 text-yellow-500" : "rotate-0 "
          }`}
        >
          +
        </span>
      </button>

      {/* Content */}
      <div
        className={`overflow-hidden transition-all duration-700 ease-in-out ${
          isOpen ? "max-h-40 opacity-100 mt-6" : "max-h-0 opacity-0"
        }`}
      >
        <p className="max-w-3xl text-white/60 text-lg leading-relaxed">
          {item.content}
        </p>
      </div>
    </div>
  );
})}

</div>

    </div>
)
}
export default Valeur;
