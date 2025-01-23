import React, { useState, useContext } from "react";
import { Globalcontext } from "../context/Globlacontext";

function MpptFirstDisplay() {
  const { mpptdisplay } = useContext(Globalcontext); // Using context to control MPPT display state
  const [smfproduct, setSMFproduct] = useState(false);
  const [tubularBatteries, setTubularBatteries] = useState(false);
  const [lithiumBatteries, setLithiumBatteries] = useState(false);

  const handleSMFproduct = () => {
    setSMFproduct(true);
    setTubularBatteries(false);
    setLithiumBatteries(false);
  };

  const handleTubularBatteries = () => {
    setTubularBatteries(true);
    setSMFproduct(false);
    setLithiumBatteries(false);
  };

  const handleLithiumBatteries = () => {
    setLithiumBatteries(true);
    setTubularBatteries(false);
    setSMFproduct(false);
  };

  return (
    <div className="w-full md:w-[80vw] mx-auto">
      {mpptdisplay !== undefined ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Infini Solar */}
          <div
            className="shadow-lg bg-white rounded-lg overflow-hidden cursor-pointer hover:shadow-xl hover:scale-105 transition-transform duration-300"
            onClick={handleSMFproduct}
          >
            <h2 className="text-center p-3 text-lg font-semibold text-gray-800 hover:text-blue-600 transition-colors">
              Infini Solar
            </h2>
            <img
              className="h-[30vh] sm:h-[40vh] md:h-[50vh] w-full object-cover"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThc2zK2HDouOnaGMLzvoPevE-JQftqFkE5cQ&s"
              alt="Infini product"
            />
          </div>

          {/* Felicity */}
          <div
            className="shadow-lg bg-white rounded-lg overflow-hidden cursor-pointer hover:shadow-xl hover:scale-105 transition-transform duration-300"
            onClick={handleTubularBatteries}
          >
            <h2 className="text-center p-3 text-lg font-semibold text-gray-800 hover:text-blue-600 transition-colors">
              Felicity
            </h2>
            <img
              className="h-[30vh] sm:h-[40vh] md:h-[50vh] w-full object-cover"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaOnPqs31JDc42B_IUzBYj8taKuPKPn0QCbw&s"
              alt="Felicity inverter"
            />
          </div>

          {/* Must */}
          <div
            className="shadow-lg bg-white rounded-lg overflow-hidden cursor-pointer hover:shadow-xl hover:scale-105 transition-transform duration-300"
            onClick={handleLithiumBatteries}
          >
            <h2 className="text-center p-3 text-lg font-semibold text-gray-800 hover:text-blue-600 transition-colors">
              Must
            </h2>
            <img
              className="h-[30vh] sm:h-[40vh] md:h-[50vh] w-full object-cover"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq-PainpSwkoFUtR2dKkHZeePNuWBDrYDyDw&s"
              alt="Must inverter"
            />
          </div>
        </div>
      ) : (
        <div>
          {/* Conditionally render battery components */}
          {smfproduct && <div className="p-4">SMF Battery Component</div>}
          {tubularBatteries && (
            <div className="p-4">Tubular Battery Component</div>
          )}
          {lithiumBatteries && (
            <div className="p-4">Lithium Battery Component</div>
          )}
        </div>
      )}
    </div>
  );
}

export default MpptFirstDisplay;
