import Nav from "../component/nav/Nav";
import { Outlet } from "react-router-dom";
import Footer1 from "../component/footer/Footer1";
import Footer2 from "../component/footer/Footer2";
// import CopyRigtt from "../component/footer/CopyRigtt";
function NavPage() {
  return (
    <div className="w-[100vw]">
      {/* <div className="ball1 blurred-ball h-[20px] w-[40px] top-[10px] left-[10px] sm:w-[200px] sm:h-[200px] sm:top-[50%] sm:left-[5px] "></div> */}
      <div className=" sticky top-0 z-20 ">
        <Nav />
      </div>
      {/* <div className="h-fit w-[100vw] flex justify-center items-center flex-col"> */}
        <div className="w-[100vw]">
          <Outlet />
        {/* </div> */}
      </div>
      {/* <Footer1 /> */}
      <Footer2 />
      {/* <CopyRigtt /> */}
    </div>
  );
}

export default NavPage;
