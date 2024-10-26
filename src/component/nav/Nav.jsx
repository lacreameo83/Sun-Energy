import { useState } from "react";
import NavSection from "./NavSection";

function Nav() {
 
  return (
    <div className="px-3   md:px-10 shadow-2xl h-[15vh] relative">
      <div className="flex text-[10px] justify-between items-center h-[8vh] ">
        <p className=" text-[10px] md:text-[12px]">
          ORDER ONLINE OR CALL US +234 0932351284
        </p>
        </div>
      {/* containg main Nav inputs */}
      <div>
        <NavSection />
      </div>
    </div>
  );
}

export default Nav;
