import Menue from "~/Compement/Generale/Menue";
import Footer from "~/Compement/Generale/footer";
import Banner from "~/Compement/Generale/banner";
import Univers_univers from "~/Compement/univers/univers";
import Welcome from "~/Compement/univers/welcome";
import Postion from "~/Compement/univers/position";
import Adn from "~/Compement/univers/adn";

export default function Home() {
  return (<div className="bg-white font-luxurious flex flex-col gap-10">

    <Menue />
     <div>
       <Banner />
       <Welcome />
        </div >
      <Univers_univers />
            <Postion />
             <Adn />
          <Footer />
  </div>);
}
