import Nav from "../component/nav/Nav";
import { Outlet } from "react-router-dom";
import AdvantageSolar from "../component/catalogueOutPuts.jsx/AdvantageSolar";

function NavPage() {
  return (
    <div>
      <div className=" sticky top-0 z-20 bg-white">
        <Nav />
      </div>
      <div className="">
        <Outlet />
      </div>

      <AdvantageSolar />
    </div>
  );
}

export default NavPage;
