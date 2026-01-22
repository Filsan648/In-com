import univer from "app/asset/univers/univers.mp4"
import Title from "../asset/Tile";
function Banner(){
    return(
          
            
        <div className="w-full h-screen  relative">
   <video autoPlay loop muted className="w-full h-full object-cover" > <source src={univer} />  </video>
   <div className="absolute  inset-0  bg-black/40"></div>



  </div>
       
    )

}
export default Banner;