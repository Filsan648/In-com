import Banner from "app/Compement/service/detail/banner"
import banner from "app/asset/service/event.png"
import Intro from "app/Compement/service/detail/Eventcompement/intro";
import image1 from "app/asset/project/pact/image1.png";
import image2 from "app/asset/project/pact/image2.png";
import image3 from "app/asset/project/pact/image3.png";
import image4 from "app/asset/project/pact/image4.png";
import image5 from "app/asset/project/pact/image5.png";
import image6 from "app/asset/project/pact/image6.png";
import Projet_event from "app/Compement/service/detail/Eventcompement/projets_event";
import Menue from "~/Compement/Generale/Menue";
import Footer from "~/Compement/Generale/footer";
function Pact (){
    const projects = [
  { id: "01", name: "L’organisation du 16ᵉ Forum de Haut Niveau du Secteur Privé de l’Union africaine",description:"in’COM a accompagné l’Union africaine dans l’organisation et la coordination du 16ᵉ Forum de Haut Niveau du Secteur Privé de l’Union africaine, tenu à Djibouti du 8 au 10 décembre. L’équipe a assuré une gestion opérationnelle rigoureuse, contribuant au succès d’un événement panafricain majeur dédié à l’économie numérique, à l’innovation, au commerce intra-africain et au développement durable." ,images: [ image2,image1,image3 ], color: "#e5e5e5"},
  { id: "02", name: "Salon du Tourisme Djibouti 2025", images: [image4, image5, image6],description:"in’COM a été Partenaire Communication Officiel du Salon du Tourisme Djibouti 2025, organisé par l’Agence Nationale du Tourisme de Djibouti (ANT).L’agence a assuré la stratégie de communication, la création de contenus, le design visuel, l’habillage des écrans LED et la couverture de l’événement, en valorisant l’image et l’attractivité touristique de Djibouti." ,color: "#d1d1d1" ,bg:"bg-[#801010] " },
  
];
    return(
        <div className="flex flex-col gap-10  font-luxurious bg-white ">
             <Menue/>
    <Banner image={banner} title="Pact" />
     <Intro intro="Organiser un événement, c’est transformer une vision en une expérience mémorable. Chez Income Événementiel, nous ne nous contentons pas de fournir du matériel : nous orchestrons votre projet de A à Z grâce à nos solutions clé en main."   expertice={[
                "Conception & Conseil Stratégique",
                "Régie Générale & Technique",
                "Scènes Mobiles & Écrans LED",
                "Logistique Opérationnelle"
              ]}  />
      <Projet_event title="Nos réalisations in Pact" projets={projects} />
<Footer/>
        </div>
    )
}
export default Pact
