import images from "app/asset/service/event.png"

function Banner({image,title}:{image:string,title:string}){
    return(
<div className="w-full h-screen">
<img src={image} alt={title} className="object-cover w-full h-full" />
</div>
    )
}
export default Banner