import Menue from "~/Compement/Generale/Menue";
import Hero from "~/Compement/Home/Hero";
import Logos from "~/Compement/Home/logos";
import Service from "~/Compement/Home/service";
import Video from "~/Compement/Home/video";
import Projecttext from "~/Compement/Home/projetstext";
import StatsSection from "~/Compement/Home/state";
import Team from "~/Compement/Home/team";
import Client  from "~/Compement/Home/client";
import Footer from "~/Compement/Generale/footer";

export default function Home() {
  return (<div className="bg-white font-luxurious flex flex-col gap-10">

    <Menue />
    <div className="">
    <Hero />
    <Logos />
    </div>
    <Service />
       <Projecttext />
        <Video />
        <StatsSection />
        <Team />
         <Client />
          <Footer />
  </div>);
}
