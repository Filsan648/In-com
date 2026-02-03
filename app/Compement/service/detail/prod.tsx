import Menue from "~/Compement/Generale/Menue";
import Footer from "~/Compement/Generale/footer";
import Banner from "~/Compement/service/detail/Prodcompement/banner"
import Intro from "./Eventcompement/intro";
import Projet_event from "app/Compement/service/detail/Eventcompement/projets_event";

import image1 from "app/asset/project/prod/image1.png"
import image2 from "app/asset/project/prod/image2.png"
import image3 from "app/asset/project/prod/image3.png"
import image4 from "app/asset/project/prod/image4.png"
import image5 from "app/asset/project/prod/image5.png"
import image6 from "app/asset/project/prod/image6.png"
import image7 from "app/asset/project/prod/image7.png"
import image8 from "app/asset/project/prod/image8.png"
import image9 from "app/asset/project/prod/image9.png"
import Video from "~/Compement/Home/video";
import video from "app/asset/prod/video_prod.mp4"
 const projects = [
  { id: "01", name: "Fire Dance à l’Institut Français de Djibouti",description:"À l’occasion du show Unity – Égalité – Paix de Djib Fire Dance à l’Institut Français de Djibouti, inPROD a assuré la production et la valorisation de l’événement, contribuant à la mise en lumière de l’expression artistique et des messages d’unité et de paix." ,images: [image1, image2,image3 ], color: "#e5e5e5"},
  { id: "02", name: "La cérémonie de remise des prix et des certificats des initiatives phares du Portefeuille Jeunesse", images: [ image5,image4, image6],description:"iPartenaire du Concours d’Innovation 2026, INCOME (Cabinet in’COM) a accompagné et valorisé les jeunes innovateurs à travers son expertise en communication et mentorat, contribuant au renforcement de l’écosystème d’innovation et de la jeunesse à Djibouti." ,color: "#d1d1d1" ,bg:"bg-[#801010] " },
  { id: "03", name: "Soirée pleine de rires avec Patson & Oualas",description:"Lors de la soirée humoristique avec Patson & Oualas, in’COM a assuré la communication et la mise en valeur de l’événement, contribuant à une ambiance dynamique et mémorable." ,images: [ image7,image8, image9], color: "#b5b5b5"},
];




function Prod() {
  
  return (
    <div className="  font-luxurious bg-white flex flex-col gap-10 ">
      <Menue />
        <Banner />
<Intro intro="Publicité • Aftermovie • Digital • Multicam Nous concevons des productions sur mesure pour un impact maximal. De la stratégie créative à la diffusion, nous sommes votre partenaire de production complet."  expertice={["Films Institutionnels & Publicités","Aftermovies & Événementiel","Captations Multicam & Live","Stratégie Digitale & Réseaux Sociaux"]} />
         <div className="bg-[#801010] p-11">
      <Video  videos={video} />
         </div>
       <Projet_event title="Nos réalisations in Prod" projets={projects} />
 <Footer />
    </div>
  );
}

export default Prod;

