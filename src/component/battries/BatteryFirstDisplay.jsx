import React, { useState } from "react";
import SMFBattery from "./smf/SMFBattery";
import Tubularbattery from "./tubular/Tubularbattery";
import Lithiumbattery from "./lithium/Lithiumbattery";
import { useContext } from "react";
import { Globalcontext } from "../context/Globlacontext";
import Products from "../templates/Products";

function BatteriesFirstDisplay() {
  const { batterydisplay, setbatterydisplay } = useContext(Globalcontext);
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
    <div className="w-full md:w-[80vw] mx-auto">
      {batterydisplay ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-7 w-full">
          <Products
            onClick={handleSMFproduct}
            name="SMF Battery"
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMg5zmOFmiSZ9-nH_G5_pAgHpuXBDVe4ouDg&s"
          />
          <Products
            onClick={handleTubularBatteries}
            name="Tubular Batteries"
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2rPAsieTyY0rr7eK1aUM2PDKtCw0bOHKQ8Q&s"
          />
          <Products
            onClick={handleLithiumBatteries}
            name="Lithium Batteries"
            img="https://cdn-enoih.nitrocdn.com/kzltgafZecVglpUbyWKFCjKzSdhSUWWa/assets/images/optimized/rev-103eb43/sakopower.com/wp-content/uploads/2022/09/Li-Sun-3.jpg"
          />
        </div>
      ) : (
        <div>
          {smfproduct && <SMFBattery />}
          {tubularBatteries && <Tubularbattery />}
          {lithiumBatteries && <Lithiumbattery />}
        </div>
      )}
    </div>
  );
}

export default BatteriesFirstDisplay;
