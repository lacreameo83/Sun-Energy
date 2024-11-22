import React, { useState } from "react";
import Infinisolargenarator from "./infinisolargenarator";
import { useContext } from "react";
import { Globalcontext } from "../context/Globlacontext";


function SolargenaratorFirstDisplay() {
  const { solarGendisplay, setsolarGendisplay } = useContext(Globalcontext);
  const [solarGenarator, setsolarGenarator] = useState(false);

  const handlesolargen = () => {
    setsolarGenarator(true);
    setsolarGendisplay(false)
  };
  

  return (
    <div className="w-[80vw]">
      {solarGendisplay ? (
        <div className="grid grid-cols-3 w-[70vw] gap-7">
          <div className="shadow-lg" onClick={handlesolargen}>
            <h2 className="text-center p-2 font-[500]  ">
              Infini Solar Genarator
            </h2>
            <img
              className="h-[50vh] w-[50vw]"
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
