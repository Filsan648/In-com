import Menue from "~/Compement/Generale/Menue";
import Footer from "~/Compement/Generale/footer";
import Banner from "~/Compement/Generale/banner";
import Welcome from "~/Compement/Generale/welcome";
import Services from "~/Compement/service/service";
export default function Service() {
  return (<div className="bg-white font-luxurious flex flex-col gap-10">

    <Menue />

    <Services />
          <Footer />
  </div>);
}
