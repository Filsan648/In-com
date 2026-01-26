import Menue from "~/Compement/Generale/Menue";
import Footer from "~/Compement/Generale/footer";
import Banner from "~/Compement/Generale/banner";
import Univers_univers from "~/Compement/univers/univers";
import Welcome from "~/Compement/Generale/welcome";
import Postion from "~/Compement/univers/position";
import Adn from "~/Compement/univers/adn";
import Valeur from "~/Compement/univers/valeur";
import Galerie from "~/Compement/univers/galerie";
export default function Home() {
  return (<div className="bg-white font-luxurious flex flex-col gap-10">

    <Menue />
     <div>
       <Banner />
       <Welcome title="Bienvenue dans l’univers in’COM "  description="Là où la créativité rencontre la stratégie, et où chaque idée prend vie avec sens, style et impact. "/>
        </div >
      <Univers_univers />
            <Postion />
             <Adn />
              <Valeur />
              <Galerie />
          <Footer />
  </div>);
}
