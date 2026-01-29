import Banner from "./banner";
import Menue from "~/Compement/Generale/Menue";
import Footer from "~/Compement/Generale/footer";
import Intro from "./Eventcompement/intro";
import Projet_event from "./Eventcompement/projets_event";
import Video from "./Eventcompement/video";
function Event() {
  return (
    <div className="bg-[#f5f5f5] min-h-screen font-luxurious selection:bg-black selection:text-white">
      <Menue />
      <Banner />
      <Intro />
      <Video />
      <Projet_event />
      <Footer />
    </div>
  );
}

export default Event;