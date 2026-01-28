function Intro(){
return(
    
      <main className="max-w-[1440px] mx-auto px-6 md:px-12 py-24">
        {/* Section Header - Style Editorial */}
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Colonne Gauche : Le Manifeste */}
          <div className="lg:w-2/3">
          
            <p className="mt-12 text-xl text-black/90 max-w-xl leading-relaxed">
Organiser un événement, c’est transformer une vision en une expérience mémorable. Chez Income Événementiel, nous ne nous contentons pas de fournir du matériel : nous orchestrons votre projet de A à Z grâce à nos solutions clé en main.
         </p>
          </div>

          {/* Colonne Droite : L'Expertise Listée */}
          <div className="lg:w-1/3 w-full border-t border-black/10 pt-8 lg:pt-0 lg:border-t-0">
            <h3 className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-10">
              Expertises Clés
            </h3>
            <ul className="space-y-8">
              {[
                "Conception & Conseil Stratégique",
                "Régie Générale & Technique",
                "Scènes Mobiles & Écrans LED",
                "Logistique Opérationnelle"
              ].map((item, index) => (
                <li key={index} className="group flex items-center justify-between border-b border-black/5 pb-4 hover:border-black transition-colors duration-500 cursor-default">
                  <span className="text-lg font-medium tracking-tight text-black/80 group-hover:translate-x-2 transition-transform duration-300">
                    {item}
                  </span>
                  <span className="text-xl opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      
      </main>
)
}
export default Intro