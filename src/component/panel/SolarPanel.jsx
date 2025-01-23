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
    <div className="w-full md:w-[80vw] mx-auto">
      {solarPaneldisplay ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Jinko */}
          <div
            className="shadow-lg bg-white rounded-lg overflow-hidden cursor-pointer hover:shadow-xl hover:scale-105 transition-transform duration-300"
            onClick={handleJinkoproduct}
          >
            <h2 className="text-center p-3 text-lg font-semibold text-gray-800 hover:text-blue-600 transition-colors">
              Jinko
            </h2>
            <img
              className="h-[30vh] sm:h-[40vh] md:h-[50vh] w-full object-cover"
              src="https://image.made-in-china.com/202f0j00nqGYbMvWkekN/Jinko-Brand-Solar-Panel-Tier-1-Mono-410W-Half-Cell-Module.webp"
              alt="Jinko"
            />
          </div>

          {/* SunTech */}
          <div
            className="shadow-lg bg-white rounded-lg overflow-hidden cursor-pointer hover:shadow-xl hover:scale-105 transition-transform duration-300"
            onClick={handleSunTech}
          >
            <h2 className="text-center p-3 text-lg font-semibold text-gray-800 hover:text-blue-600 transition-colors">
              SunTech
            </h2>
            <img
              className="h-[30vh] sm:h-[40vh] md:h-[50vh] w-full object-cover"
              src="https://www.deegesolar.co.uk/wp-content/uploads/2021/05/Suntech_Solar_Panels-06.png"
              alt="SunTech"
            />
          </div>

          {/* Longi */}
          <div
            className="shadow-lg bg-white rounded-lg overflow-hidden cursor-pointer hover:shadow-xl hover:scale-105 transition-transform duration-300"
            onClick={handleLongi}
          >
            <h2 className="text-center p-3 text-lg font-semibold text-gray-800 hover:text-blue-600 transition-colors">
              Longi
            </h2>
            <img
              className="h-[30vh] sm:h-[40vh] md:h-[50vh] w-full object-cover"
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
