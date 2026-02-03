

function Intro({intro,expertice}:{intro:string,expertice:Array<string>}){
return(

      <main className="max-w-[1440px]  px-6 md:px-6">
        {/* Section Header - Style Editorial */}
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Colonne Gauche : Le Manifeste */}
          <div className="lg:w-2/3">
          
            <p className="mt-12 text-xl text-black/90 max-w-xl leading-relaxed">
{intro}         </p>
          </div>

          {/* Colonne Droite : L'Expertise Listée */}
          <div className="lg:w-1/3 w-full border-t border-black/10 pt-8 lg:pt-0 lg:border-t-0">
            <h3 className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-10">
              Expertises Clés
            </h3>
            <ul className="space-y-8">
              {expertice.map((item, index) => (
                <li key={index} className="group flex items-center justify-between border-b border-black/5 pb-4 hover:border-black transition-colors duration-500 cursor-default">
                  <span className="text-lg font-medium tracking-tight text-black/80 group-hover:translate-x-2 transition-transform duration-300">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      
      </main>
)
}
export default Intro