import Menue from "~/Compement/Generale/Menue";
import Hero from "~/Compement/Home/Hero";
import Logos from "~/Compement/Home/logos";
import Service from "~/Compement/Home/service";
export default function Home() {
  return (<div className="bg-white font-luxurious flex flex-col gap-10">

    <Menue />
    <div className="">
    <Hero />
    <Logos />
    </div>
    <Service />
  </div>);
}
