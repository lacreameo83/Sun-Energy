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
    <div className="w-[80vw]">
      {mpptdisplay !== undefined ? (
        <div className="grid grid-cols-2 md:grid-cols-3 w-[70vw] gap-7">
          <div className="shadow-lg cursor-pointer" onClick={handleSMFproduct}>
            <h2 className="text-center p-2 font-[500]">Infini Solar</h2>
            <img
              className="h-[50vh] w-[50vw] object-cover"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThc2zK2HDouOnaGMLzvoPevE-JQftqFkE5cQ&s"
              alt="Infini product"
            />
          </div>
          <div
            className="shadow-lg cursor-pointer"
            onClick={handleTubularBatteries}
          >
            <h2 className="text-center font-[500] p-2">Felicity</h2>
            <img
              className="h-[50vh] w-[50vw] object-cover"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaOnPqs31JDc42B_IUzBYj8taKuPKPn0QCbw&s"
              alt="Felicity inverter"
            />
          </div>
          <div
            className="shadow-lg cursor-pointer"
            onClick={handleLithiumBatteries}
          >
            <h2 className="text-center font-[500] p-2">Must</h2>
            <img
              className="h-[50vh] w-[50vw] object-cover"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq-PainpSwkoFUtR2dKkHZeePNuWBDrYDyDw&s"
              alt="Must inverter"
            />
          </div>
        </div>
      ) : (
        <div>
          {/* Conditionally render battery components */}
          {smfproduct && <div>SMF Battery Component</div>}
          {tubularBatteries && <div>Tubular Battery Component</div>}
          {lithiumBatteries && <div>Lithium Battery Component</div>}
        </div>
      )}
    </div>
  );
}

export default MpptFirstDisplay;
