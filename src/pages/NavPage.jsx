import Nav from "../component/nav/Nav";
import { Outlet } from "react-router-dom";
import Footer1 from "../component/footer/Footer1";
import Footer2 from "../component/footer/Footer2";
// import CopyRigtt from "../component/footer/CopyRigtt";

function NavPage() {
  return (
    <div className="w-full">
      <div className="sticky top-0 z-50">
        <Nav />
      </div>
      <div className="bg-black">
       
        <div className="w-full">
         
          <Outlet />
          {/* </div> */}
        </div>
      
        <Footer2 />
       
      </div>
    </div>
  );
}

export default NavPage;
