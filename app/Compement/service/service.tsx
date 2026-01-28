import event from "app/asset/service/event.png"
import design from "app/asset/service/design.png"
import voice from "app/asset/service/voice.png"
import connect from "app/asset/service/connect.png"
import print from "app/asset/service/print.png"
import eventvideo from "app/asset/service/event.mp4"
import prod_video from "app/asset/service/prod.mp4"
import { Link } from "react-router"
  const services = [
  {
    title: "In Event",
    description:
    "Événementiel clé en main : conception créative, régie générale, scénographie, scènes mobiles, écrans LED et déploiement terrain maîtrisé de bout en bout.",
    image:null,
    video: eventvideo,
    color:"group-hover:bg-indigo-950/80",
    path:"/service/event"
  },
  {
    title: "In Design",
    description:
    "Identité visuelle et direction artistique : logos, chartes graphiques et univers créatifs conçus pour durer et marquer les esprits.",
    image: design,
    color:"group-hover:bg-pink-400/80",
    path:"/service/design"
  },
  {
    title: "In Connect",
    description:
    "Communication digitale stratégique : gestion des réseaux sociaux, création de contenus, calendriers éditoriaux et animation de communautés engagées.",
    image: connect,
    color:"group-hover:bg-cyan-500/80",
    path:"/service/connect"
  },
  {
    title: "In Voice",
    description:
    "Formats incarnés et médias narratifs : talk-shows, interviews, podcasts et contenus portés par des voix locales authentiques et influentes.",
    image: voice,
    color:"group-hover:bg-amber-800/80 ",
    path:"/service/voice"
  },
  {
    title: "In Prod",
    description:
    "Production audiovisuelle complète : films institutionnels, publicités, aftermovies, contenus digitaux et captations multicaméras.",
    image: null,
    video:prod_video,
    color:"group-hover:bg-red-950/80",
    path:"/service/prod"
  },
  {
    title: "In Print",
    description:
    "Impression et signalétique : bâches, adhésifs, panneaux et objets personnalisés, produits en interne avec une exigence de qualité constante.",
    image: print,
    color:"group-hover:bg-pink-950/80",
    path:"/service/print"
  }
]

function Service() {
 
  return (
  <div className="grid grid-cols-3 mt-20  ">
  {services.map((item, index) => (

  <div key={index} className="overflow-hidden cursor-pointer relative group">
    <Link to={item.path}>
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

  <div className= {`absolute inset-0 bg-amber-600/0 ${item.color} transition-all duration-300`}  ></div>


  <div className="absolute bottom-6 left-4  text-white text-3xl hidden group-hover:block">
    {item.title}
  </div>
   </Link>
</div>
  ))}
</div>

  );
}

export default Service;
