import React, { useContext, useState } from "react";
import { Globalcontext } from "../context/Globlacontext";
import Longi from "./longi/Longi";
import Suntech from "./suntech/Suntech";
import Jinko from "./jinko/Jinko";

function SolarPanel() {
  const { solarPaneldisplay, setSolarPanel } = useContext(Globalcontext);
  const [Jinkoproduct, setJinkoproduct] = useState(false);
  const [sunTech, setSunTech] = useState(false);
  const [Longioutput, setLongi] = useState(false);
  const handleJinkoproduct = () => {
    setJinkoproduct(true);
    setSolarPanel(false);
    setSunTech(false);
   setLongi(false);
  };
  const handleSunTech = () => {
    setSunTech(true);
    setSolarPanel(false);
    setJinkoproduct(false);
    setLongi(false);
  };

  const handleLongi = () => {
    setLongi(true);
   setSolarPanel(false);
    setSunTech(false);
    setJinkoproduct(false);
  };

  return (
    <div className="w-[80vw]">
      {solarPaneldisplay ? (
        <div className="grid grid-cols-2 md:grid-cols-3  w-[70vw] gap-7">
          <div className="shadow-lg" onClick={handleJinkoproduct}>
            <h2 className="text-center p-2 font-[500]  ">Jinko</h2>
            <img
              className="h-[50vh] w-[50vw]"
              src="https://image.made-in-china.com/202f0j00nqGYbMvWkekN/Jinko-Brand-Solar-Panel-Tier-1-Mono-410W-Half-Cell-Module.webp"
              alt="Jinko"
            />
          </div>
          <div onClick={handleSunTech} className="shadow-lg">
            <h2 className="text-center font-[500] p-2">SunTech</h2>
            <img
              className="h-[50vh] w-[50vw]"
              src="https://www.deegesolar.co.uk/wp-content/uploads/2021/05/Suntech_Solar_Panels-06.png"
              alt="SunTech"
            />
          </div>
          <div onClick={handleLongi} className="shadow-lg">
            <h2 className="text-center font-[500] p-2">Longi</h2>
            <img
              className="h-[50vh] w-[50vw]"
              src="https://image.made-in-china.com/318f0j00MTrGVzcFJWqu/longi-company-2-mp4.webp"
              alt="Longi"
            />
          </div>
        </div>
      ) : (
        <div>
          {Jinkoproduct && <Jinko />}
          {sunTech && <Suntech />}
          {Longioutput && <Longi />}
        </div>
      )}
    </div>
  );
}

export default SolarPanel;
