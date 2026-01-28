import images from "app/asset/service/event.png"

function Banner(){
    return(
<div className="w-full h-screen">
<img src={images} className="object-cover w-full h-full" />
</div>
    )
}
export default Banner