import { NavLink } from "react-router";
function Menue(){
const linkClass = ({ isActive }: { isActive: boolean }) =>
    `relative  font-medium tracking-wide transition-all duration-300
     after:absolute after:left-0 after:-bottom-1  after:h-px after:w-0
     after:bg-black after:transition-all after:duration-300
     hover:after:w-full 
    `;

    return(
         <div className="fixed top-0 z-50 w-full">
        <div className=" h-16 bg-white flex text-3xl gap-5 font-luxurious justify-between items-center pl-16 pr-11 border-b border-b-black ">
       <div> <p>In COM </p></div>


        <div className="  flex text-lg gap-5 font-luxurious ">
  <NavLink to="/" className={linkClass}>
            Home
          </NavLink>
<NavLink to="/univers" className={linkClass}>Univers</NavLink>
<NavLink to="/service" className={linkClass}>Service</NavLink>

        </div>

        </div>
         </div>
    
    )


}
export default Menue ;