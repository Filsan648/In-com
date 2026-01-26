import event from "app/asset/service/event.png"
import design from "app/asset/service/design.png"
import voice from "app/asset/service/voice.png"
import connect from "app/asset/service/connect.png"
import prod from "app/asset/service/prod.png"
import print from "app/asset/service/print.png"
import eventvideo from "app/asset/service/event.mp4"
import prod_video from "app/asset/service/prod.mp4"
  const services = [
  {
    title: "In Event",
    description:
    "Événementiel clé en main : conception créative, régie générale, scénographie, scènes mobiles, écrans LED et déploiement terrain maîtrisé de bout en bout.",
    image:null,
    video: eventvideo
  },
  {
    title: "In Design",
    description:
    "Identité visuelle et direction artistique : logos, chartes graphiques et univers créatifs conçus pour durer et marquer les esprits.",
    image: design
  },
  {
    title: "In Connect",
    description:
    "Communication digitale stratégique : gestion des réseaux sociaux, création de contenus, calendriers éditoriaux et animation de communautés engagées.",
    image: connect
  },
  {
    title: "In Voice",
    description:
    "Formats incarnés et médias narratifs : talk-shows, interviews, podcasts et contenus portés par des voix locales authentiques et influentes.",
    image: voice
  },
  {
    title: "In Prod",
    description:
    "Production audiovisuelle complète : films institutionnels, publicités, aftermovies, contenus digitaux et captations multicaméras.",
    image: null,
    video:prod_video
  },
  {
    title: "In Print",
    description:
    "Impression et signalétique : bâches, adhésifs, panneaux et objets personnalisés, produits en interne avec une exigence de qualité constante.",
    image: print
  }
]

function Service() {
 
  return (
  <div className="grid grid-cols-3 mt-20  ">
  {services.map((item, index) => (
  <div key={index} className="overflow-hidden cursor-pointer relative group">
  {item.image ? (
    <img
      src={item.image}
      className="w-full h-96 object-cover"
      alt=""
    />
  ) : (
    <video autoPlay muted loop className="w-full h-96 object-cover">
      <source src={item.video} />
    </video>
  )}

  {/* Overlay */}
  <div className="absolute inset-0 bg-amber-600/0 group-hover:bg-amber-600/80 transition-all duration-300"></div>

  {/* Texte */}
  <div className="absolute bottom-6 left-4 text-white text-3xl hidden group-hover:block">
    {item.title}
  </div>
</div>
  ))}
</div>
  );
}

export default Service;