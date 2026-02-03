import image1 from "app/asset/univers/homme.png";
import image2 from "app/asset/univers/kik.png";
import image3 from "app/asset/project/prod/banner1.png";
import image4 from "app/asset/project/prod/banner2.png";

const images = [
  { src: image1, label: "01", title: "Homme" },
  { src: image2, label: "02", title: "Kik" },
  { src: image3, label: "03", title: "Production I" },
  { src: image4, label: "04", title: "Production II" },
];

function Banner() {
  return (
    <section className="w-full flex items-center ">
      <div className="grid grid-cols-1 overflow-hidden sm:grid-cols-2 h-screen lg:grid-cols-4 gap-2  w-full  ">
        {images.map((item, index) => (
          <div 
            key={index} 
            className="group relative h-full overflow-hidden aspect-[3/4] "
          >
        
            <img 
              src={item.src} 
              alt={item.title}
              className="w-full h-full object-cover grayscale-[20%] " 
            />

       
            <div className="absolute inset-0 bg-black/20 " />

         
          </div>
        ))}
      </div>
    </section>
  );
}

export default Banner;