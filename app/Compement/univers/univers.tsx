import Title from "../asset/Tile";
import djibouti from "app/asset/univers/djibouti.png";
import homme from "app/asset/univers/homme.png";
import univer3 from "app/asset/univers/univer3_leads.png";
import office from "app/asset/univers/office.png";
import with_kiki from "app/asset/univers/kik.png";
import leads from "app/asset/univers/she_leads.png";
function Univers_univers() {
  return (
    <section className=" py-20 px-6 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        

        <div className="relative w-full h-[500px] lg:h-[700px]">
          
   
          <div className="grid grid-cols-2 gap-3 lg:hidden">
            {[djibouti, univer3, homme, office].map((img, index) => (
              <div key={index} className="border-[0.5px] border-yellow-600/30 p-1 bg-black">
                <img src={img} alt="Gallery" className="object-cover w-full h-full filter grayscale hover:grayscale-0 transition-all duration-700" />
              </div>
            ))}
          </div>
 
      
          <div className="hidden lg:block relative h-full">

            <div className="absolute top-0 left-0 w-[320px] h-[400px]   z-10   ">
              <img src={univer3} className="w-full h-full object-cover  " alt="Vision" />
            </div>

            <div className="absolute top-[40px] right-0 w-[220px] h-[300px]   z-20  shadow-2xl">
              <img src={djibouti} className="w-full h-full object-cover  " alt="Strategy" />
            </div>

        
            <div className="absolute -bottom-20 left-0 w-[250px] h-[280px]   z-40 backdrop-blur-md">
              <img src={homme} className="w-full h-full object-cover " alt="Office" />
            </div>
             <div className="absolute bottom-0 right-0 w-[250px] h-[280px]   z-40 backdrop-blur-md">
              <img src={with_kiki} className="w-full h-full object-cover" alt="Office" />
            </div>

            <div className="absolute -top-10 -left-10 w-40 h-40 border-l border-t border-[#801010] z-0"></div>
            <div className="absolute -bottom-10 -right-6 w-40 h-40 border-r border-b border-[#801010] z-0"></div>
          </div>
        </div>


        <div className="relative  lg:pl-10">
          <div className="mb-8 overflow-hidden">
            <Title
              title="In’COM, l’agence 360° qui repense la communication à Djibouti"
              subtitle="The Excellence"
             
            />
         
          </div>

          <div className="space-y-6">

              <p className="text-black/90 text-[17px] " >Créée en <span className="text-[#801010] text-[18px] font-extrabold " > 2020</span>, in’COM est née d’une  <span className="text-[#801010] text-[18px] font-extrabold " > vision audacieuse</span> : bâtir une agence de communication et de marketing intégrée capable de réunir sous un même toit tous les métiers de la communication moderne 
 <br/>  <br/> 
Au fil des années, grâce à la confiance de ses clients et partenaires, in’COM a su évoluer d’un cabinet conseil vers une agence créative intégrée à 360°, reconnue pour sa <span className="text-[#801010] text-[18px] font-extrabold " >rigueur</span>, sa<span className="text-[#801010] text-[18px] font-extrabold " > flexibilité</span> , son <span className="text-[#801010] text-[18px] font-extrabold " > innovation</span>  et sa capacité à donner vie à des projets de ses clients et partenaires.
Cette croissance repose sur une vision claire : offrir a ses clients et partenaires une cohérence totale entre identité, message et expérience, en alliant stratégie, créativité et performance.
 <br/>  <br/> 
Aujourd’hui in’COM s’impose à  <span className="text-[#801010] text-[18px] font-extrabold " > Djibouti</span>  , comme une référence régionale en matière de communication intégrée.
Nous combinons la stratégie d’un <span className="text-[#801010] text-[18px] font-extrabold " > cabinet conseil</span> , la créativité d’un <span className="text-[#801010] text-[18px] font-extrabold " > studio design</span> et la réactivité d’un    <span className="text-[#801010] text-[18px] font-extrabold " > atelier de production</span> , pour offrir des solutions globales adaptées à chaque besoin.  </p>
            
          </div>
        </div>

      </div>
    </section>
  );
}

export default Univers_univers;