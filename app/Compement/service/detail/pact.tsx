import Banner from "app/Compement/service/detail/banner"
import banner from "app/asset/service/event.png"
import Intro from "app/Compement/service/detail/Eventcompement/intro";
function Pact (){
    return(
        <div className="flex flex-col gap-10  font-luxurious bg-white ">
    <Banner image={banner} title="Pact" />
     <Intro intro="Organiser un événement, c’est transformer une vision en une expérience mémorable. Chez Income Événementiel, nous ne nous contentons pas de fournir du matériel : nous orchestrons votre projet de A à Z grâce à nos solutions clé en main."   expertice={[
                "Conception & Conseil Stratégique",
                "Régie Générale & Technique",
                "Scènes Mobiles & Écrans LED",
                "Logistique Opérationnelle"
              ]}  />
        </div>
    )
}
export default Pact
