
import Banner from "app/Compement/service/detail/banner"
import Menue from "~/Compement/Generale/Menue";
import Footer from "~/Compement/Generale/footer";
import Intro from "app/Compement/service/detail/Eventcompement/intro";
import Projet_event from "app/Compement/service/detail/Eventcompement/projets_event";
import Video from "app/Compement/service/detail/Eventcompement/video";


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
import image12 from "app/asset/project/event/image12.png";
import bg from "app/asset/background/image.png"
function Event() {
  const projects = [
  { id: "01", name: "L’organisation du 16ᵉ Forum de Haut Niveau du Secteur Privé de l’Union africaine",description:"in’COM a accompagné l’Union africaine dans l’organisation et la coordination du 16ᵉ Forum de Haut Niveau du Secteur Privé de l’Union africaine, tenu à Djibouti du 8 au 10 décembre. L’équipe a assuré une gestion opérationnelle rigoureuse, contribuant au succès d’un événement panafricain majeur dédié à l’économie numérique, à l’innovation, au commerce intra-africain et au développement durable." ,images: [image1, image10,image2 ], color: "#e5e5e5"},
  { id: "02", name: "Salon du Tourisme Djibouti 2025", images: [image11, image4, image5],description:"in’COM a été Partenaire Communication Officiel du Salon du Tourisme Djibouti 2025, organisé par l’Agence Nationale du Tourisme de Djibouti (ANT).L’agence a assuré la stratégie de communication, la création de contenus, le design visuel, l’habillage des écrans LED et la couverture de l’événement, en valorisant l’image et l’attractivité touristique de Djibouti." ,color: "#d1d1d1" ,bg:"bg-[#801010] " },
  { id: "03", name: "HLB Middle East & Africa Conference 2025 – Djibouti",description:"in’COM a assuré la conception, l’organisation et la coordination globale de la HLB Middle East & Africa Conference 2025 à Djibouti. De la gestion logistique à la mise en scène de l’événement, l’équipe a veillé à offrir une expérience fluide, professionnelle et à forte valeur ajoutée, reflétant l’image et les standards internationaux du réseau HLB." ,images: [ image9,image12, image8], color: "#b5b5b5"},
];
  return (
    <div className="flex flex-col gap-10  font-luxurious bg-white ">
      <Menue />
      <Banner />
      <Intro intro="Organiser un événement, c’est transformer une vision en une expérience mémorable. Chez Income Événementiel, nous ne nous contentons pas de fournir du matériel : nous orchestrons votre projet de A à Z grâce à nos solutions clé en main."   expertice={[
                "Conception & Conseil Stratégique",
                "Régie Générale & Technique",
                "Scènes Mobiles & Écrans LED",
                "Logistique Opérationnelle"
              ]}  />
      <Video />
      <Projet_event title="Nos réalisations in Event" projets={projects} />
      <Footer />
    </div>
  );
}

export default Event;