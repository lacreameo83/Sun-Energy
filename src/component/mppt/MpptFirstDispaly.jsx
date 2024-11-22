import React, { useState } from "react";

import { useContext } from "react";
import { Globalcontext } from "../context/Globlacontext";


function MpptFirstDisplay() {
  const { mpptdisplay, setmpptdisplay } = useContext(Globalcontext);
  const [smfproduct, setSMFproduct] = useState(false);
  const [tubularBatteries, setTubularBatteries] = useState(false);
  const [lithiumBatteries, setLithiumBatteries] = useState(false);
  const handleSMFproduct = () => {
    setSMFproduct(true);
    setbatterydisplay(false);
    setTubularBatteries(false);
    setLithiumBatteries(false);
  };
  const handleTubularBatteries = () => {
    setTubularBatteries(true);
    setbatterydisplay(false);
    setSMFproduct(false);
    setLithiumBatteries(false);
  };

  const handleLithiumBatteries = () => {
    setLithiumBatteries(true);
    setTubularBatteries(false);
    setbatterydisplay(false);
    setSMFproduct(false);
  };

  return (
    <div className="w-[80vw]">
      {mpptdisplay || mpptdisplay === false ? (
        <div className="grid grid-cols-2  md:grid-cols-3  w-[70vw] gap-7">
          <div className="shadow-lg" onClick={handleSMFproduct}>
            <h2 className="text-center p-2 font-[500]  ">Infini solar</h2>
            <img
              className="h-[50vh] w-[50vw]"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThc2zK2HDouOnaGMLzvoPevE-JQftqFkE5cQ&s"
              alt="infinit product"
            />
          </div>
          <div onClick={handleTubularBatteries} className="shadow-lg">
            <h2 className="text-center font-[500] p-2">Felicity</h2>
            <img
              className="h-[50vh] w-[50vw]"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaOnPqs31JDc42B_IUzBYj8taKuPKPn0QCbw&s"
              alt="felicity inverter"
            />
          </div>
          <div onClick={handleLithiumBatteries} className="shadow-lg">
            <h2 className="text-center font-[500] p-2">Must</h2>
            <img
              className="h-[50vh] w-[50vw]"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq-PainpSwkoFUtR2dKkHZeePNuWBDrYDyDw&s"
              alt="luminious inverter"
            />
          </div>
        </div>
      ) : (
        <div>
          {/* {smfproduct && <SMFBattery />}
          {tubularBatteries && <Tubularbattery />}
          {lithiumBatteries && <Lithiumbattery />} */}
        </div>
      )}
    </div>
  );
}

export default MpptFirstDisplay;
