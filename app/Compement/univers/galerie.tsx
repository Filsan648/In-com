import image1 from "app/asset/univers/galerie/image1.png";
import image2 from "app/asset/univers/galerie/image2.png";
import image3 from "app/asset/univers/galerie/image3.png";
import image4 from "app/asset/univers/galerie/image4.png";
import image5 from "app/asset/univers/galerie/image5.png";
import image6 from "app/asset/univers/galerie/image6.png";
import image7 from "app/asset/univers/galerie/image7.png";
import image8 from "app/asset/univers/galerie/image8.png";
import image9 from "app/asset/univers/galerie/image9.png";
import Title from "../asset/Tile";
const gallery = [
  { id: 1, url: image1, span: "col-span-3 row-span-4", title: "Engineering Lab" },
  { id: 2, url: image2, span: "col-span-3 row-span-2", title: "Executive Suite" },
  { id: 3, url: image3, span: "col-span-6 row-span-5", title: "Main Production" },
  { id: 4, url: image4, span: "col-span-3 row-span-3", title: "Logic Center" },
  { id: 5, url: image5, span: "col-span-3 row-span-4", title: "Design Studio" },
  { id: 6, url: image6, span: "col-span-3 row-span-2", title: "Meeting Space" },
  { id: 7, url: image7, span: "col-span-6 row-span-3", title: "Assembly Line" },
  { id: 8, url: image8, span: "col-span-3 row-span-4", title: "Lobby" },
  { id: 9, url: image9, span: "col-span-3 row-span-2", title: "Archive Room" },
];

export default function GalerieBlanche() {
  return (
    <section className="bg-white min-h-screen px-6 md:px-6 text-zinc-900">
      {/* Header Style Magazine */}
      <div className="max-w-[1600px] mx-auto mb-20 ">
        <div>
           <Title title="L’univers in’COM : là où la créativité prend forme"   subtitle="Notre univers" />
          
        </div>
        <p className=" text-lg text-black/90 mt-3 ">
         Plongez dans l’univers in’COM : un espace créatif, vibrant et inspirant où chaque détail reflète notre ADN : design, rigueur et passion.
Ici naissent les idées, les concepts et les campagnes qui façonnent la communication à Djibouti et au-delà.
        </p>
      </div>

      {/* Grille Bento Épurée */}
      <div className="max-w-[1600px] mx-auto grid grid-cols-12 auto-rows-[10vh] gap-6">
        {gallery.map((img) => (
          <div 
            key={img.id} 
            className={`${img.span} group relative flex flex-col`}
          >
            {/* Conteneur Image avec masque */}
            <div className="relative flex-1 overflow-hidden bg-zinc-50">
              <img 
                src={img.url} 
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-[1.2s] cubic-bezier(0.19, 1, 0.22, 1) group-hover:scale-110"
              />
              {/* Overlay blanc très léger au survol */}
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            {/* Légende minimaliste sous l'image */}
            <div className="mt-3 flex justify-between items-baseline overflow-hidden">
              <span className="text-[10px] font-mono text-zinc-400">00{img.id}</span>
              <h3 className="text-[11px] uppercase tracking-widest font-semibold translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                {img.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}