import Title from "../asset/Tile";
import Scrollservivces from "./service2";
function Service(){
return(
    <div className="px-4   ">
       <div className=" "> <Title title="Création qui parle, design qui marque" />
        <p className="text-black/80 w-1/2 pt-8 text-xl text-justify"> Nos services ne se contentent pas de concrétiser vos idées : ils les transforment en expériences uniques, mémorables et entièrement personnalisées, conçues pour laisser une impression durable et raconter votre histoire avec force et authenticité.
  </p>  </div>
  <Scrollservivces />
  </div>
)
}
export default Service;