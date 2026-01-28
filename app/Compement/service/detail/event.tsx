import Banner from "./banner";
import Menue from "~/Compement/Generale/Menue";
import Footer from "~/Compement/Generale/footer";
import Intro from "./Eventcompement/intro";
import Projet_event from "./Eventcompement/projets_event";
function Event() {
  return (
    <div className="bg-[#f5f5f5] min-h-screen font-sans selection:bg-black selection:text-white">
      <Menue />
      <Banner />
 <Intro />
  <Projet_event />
      <Footer />
    </div>
  );
}

export default Event;