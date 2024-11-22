import React, { useState } from "react";
import SMFBattery from "./smf/SMFBattery";
import Tubularbattery from "./tubular/Tubularbattery";
import Lithiumbattery from "./lithium/Lithiumbattery";
import { useContext } from "react";
import { Globalcontext } from "../context/Globlacontext";
import Products from "../templates/Products";

function BatteriesFirstDisplay() {
  const {batterydisplay, setbatterydisplay} = useContext(Globalcontext);
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
      {batterydisplay ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Products
            onClick={handleSMFproduct}
            name="SMF Battery"
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMg5zmOFmiSZ9-nH_G5_pAgHpuXBDVe4ouDg&s"
          />
          {/* <div className="shadow-lg" onClick={handleSMFproduct}>
            <h2 className="text-center p-2 font-[500]  ">SMF Battery</h2>
            <img
              className="h-[50vh] w-[50vw]"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMg5zmOFmiSZ9-nH_G5_pAgHpuXBDVe4ouDg&s"
              alt="infinit product"
            />
          </div> */}
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
          {/* <div onClick={handleTubularBatteries} className="shadow-lg">
            <h2 className="text-center font-[500] p-2">Tubular Batteries</h2>
            <img
              className="h-[50vh] w-[50vw]"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2rPAsieTyY0rr7eK1aUM2PDKtCw0bOHKQ8Q&s"
              alt="felicity inverter"
            />
          </div> */}
          {/* <div onClick={handleLithiumBatteries} className="shadow-lg">
            <h2 className="text-center font-[500] p-2">Lithium Batteries</h2>
            <img
              className="h-[50vh] w-[50vw]"
              src="https://cdn-enoih.nitrocdn.com/kzltgafZecVglpUbyWKFCjKzSdhSUWWa/assets/images/optimized/rev-103eb43/sakopower.com/wp-content/uploads/2022/09/Li-Sun-3.jpg"
              alt="luminious inverter"
            />
          </div> */}
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
