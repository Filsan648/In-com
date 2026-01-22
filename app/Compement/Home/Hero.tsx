import video_hero from "~/asset/hero/video_hero.mp4"
import Button from "../asset/Button";
import Title from "../asset/Tile";

function Hero(){
    return(
           <div className="flex md:flex-row flex-col  text-black/90">  
            <div className="md:w-2/3 w-full md:h-screen  h-80 " > 
               <video muted autoPlay loop className="w-full h-full object-cover"  > <source src={video_hero} type="video/mp4" />  </video></div>  

<div className="md:w-1/3 w-full  font-luxurious p-10 ">
<Title title="Un seul partenaire pour toutes vos solutions en communication" subtitle="About" />

    <p className="text-justify text-black/85  text-lg mt-5">
      Avec in’COM, vous entrez dans un écosystème créatif intégré qui réunit design, impression, audiovisuel, digital, événementiel, influence et conseil stratégique.
De l’idée à la réalisation, nous offrons des solutions 360°, 100% in-house.
    </p>
   <p className=" text-xl pt-2 text-black">In spired parternership , in credible <span className="text-[#801010] font-mountains"> result   </span></p>
<div className=" ">
      <Button content="ABOUT US" classtyle=" border  border-[#801010] text-[#801010] " /></div>
</div>
  
</div>
    )
}
export default Hero;