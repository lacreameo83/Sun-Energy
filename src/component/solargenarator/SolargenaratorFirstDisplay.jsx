import React, { useState } from "react";
import Infinisolargenarator from "./infinisolargenarator";
import { useContext } from "react";
import { Globalcontext } from "../context/Globlacontext";

function SolargenaratorFirstDisplay() {
  const { solarGendisplay, setsolarGendisplay } = useContext(Globalcontext);
  const [solarGenarator, setsolarGenarator] = useState(false);

  const handlesolargen = () => {
    setsolarGenarator(true);
    setsolarGendisplay(false);
  };

  return (
    <div className="w-full md:w-[80vw] mx-auto">
      {solarGendisplay ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-7 w-full">
          <div className="shadow-lg cursor-pointer" onClick={handlesolargen}>
            <h2 className="text-center p-2 font-[500] text-sm sm:text-base md:text-lg">
              Infini Solar Generator
            </h2>
            <img
              className="h-[30vh] sm:h-[40vh] md:h-[50vh] w-full object-cover rounded-lg"
              src="https://image.made-in-china.com/43f34j00hUDoywmCrqga/Pay-as-You-Go-Solar-Home-System-24V-DC-Multifunctional-Small-Solar-Panel-Lighting-System-Kit.jpg"
              alt="infinit product"
            />
          </div>
        </div>
      ) : (
        <div>{solarGenarator && <Infinisolargenarator />}</div>
      )}
    </div>
  );
}

export default SolargenaratorFirstDisplay;
