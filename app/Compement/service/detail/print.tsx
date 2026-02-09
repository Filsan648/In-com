import print from "app/asset/service/print.png";
import Banner from "app/Compement/service/detail/banner";
import Intro from "app/Compement/service/detail/Eventcompement/intro";
import Video from "~/Compement/Home/video";
import print_video from "app/asset/service/print.mp4"
function Print(){
return(
      <div className="flex flex-col gap-10  font-luxurious bg-white ">  
        <Banner image={print} title="Print" />
           <Intro intro="Organiser un événement, c’est transformer une vision en une expérience mémorable. Chez Income Événementiel, nous ne nous contentons pas de fournir du matériel : nous orchestrons votre projet de A à Z grâce à nos solutions clé en main."   expertice={[
                "Conception & Conseil Stratégique",
                "Régie Générale & Technique",
                "Scènes Mobiles & Écrans LED",
                "Logistique Opérationnelle"
              ]}  />
    <Video videos={print_video} />


      </div>
)
}
export default Print;


