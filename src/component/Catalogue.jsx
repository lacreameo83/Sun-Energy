import { useContext, useState } from "react";
import BatteriesFirstDisplay from "./battries/BatteryFirstDisplay";
import Camera from "./catalogueOutPuts.jsx/Camera";
import SolarPanel from "./panel/SolarPanel";
import MpptFirstDisplay from "./mppt/MpptFirstDispaly";
import SolargenaratorFirstDisplay from "./solargenarator/SolargenaratorFirstDisplay";
import AlProducts from "./catalogueOutPuts.jsx/AlProducts";
import FirstDisplayInver from "./inverter/infinit/FirstDisplayInver";
import { Globalcontext } from "./context/Globlacontext";

function Catalogue() {
  const {
    batterydisplay,
    setbatterydisplay,
    solarGendisplay,
    setsolarGendisplay,
    solarPaneldisplay,
    setSolarPanel,
    mpptdisplay,
    setmpptdisplay,
  } = useContext(Globalcontext);

  const [isInverter, SetIsInverter] = useState(false);
  const [isBatteries, SetIsBatteries] = useState(false);
  const [isCamera, SetIsCamera] = useState(false);
  const [isPanels, SetIsPanels] = useState(false);
  const [isMttp, SetIsMttp] = useState(false);
  const [isGenarator, SetIsGenarator] = useState(false);
  const [isAllProducts, SetIsAllProducts] = useState(true);

  const handleProducts = () => {
    SetIsAllProducts(true);
    SetIsInverter(false);
    SetIsBatteries(false);
    SetIsCamera(false);
    SetIsPanels(false);
    SetIsMttp(false);
    SetIsGenarator(false);
  };

  const handleInverter = () => {
    SetIsInverter(!isInverter);
    SetIsBatteries(false);
    SetIsCamera(false);
    SetIsPanels(false);
    SetIsMttp(false);
    SetIsGenarator(false);
    SetIsAllProducts(false);
  };

  const handleBatteries = () => {
    SetIsInverter(false);
    SetIsBatteries(true);
    SetIsCamera(false);
    SetIsPanels(false);
    SetIsMttp(false);
    SetIsGenarator(false);
    SetIsAllProducts(false);
    setbatterydisplay(!batterydisplay);
  };

  const handleCamera = () => {
    SetIsInverter(false);
    SetIsBatteries(false);
    SetIsCamera(true);
    SetIsPanels(false);
    SetIsMttp(false);
    SetIsGenarator(false);
    SetIsAllProducts(false);
  };

  const handlePanels = () => {
    setSolarPanel(!solarPaneldisplay);
    SetIsInverter(false);
    SetIsBatteries(false);
    SetIsCamera(false);
    SetIsPanels(true);
    SetIsMttp(false);
    SetIsGenarator(false);
    SetIsAllProducts(false);
  };

  const handleMttp = () => {
    setmpptdisplay(!mpptdisplay);
    SetIsMttp(true);
    SetIsInverter(false);
    SetIsBatteries(false);
    SetIsCamera(false);
    SetIsPanels(false);
    SetIsGenarator(false);
    SetIsAllProducts(false);
  };

  const handleGenaretor = () => {
    setsolarGendisplay(!solarGendisplay);
    SetIsGenarator(true);
    SetIsMttp(false);
    SetIsInverter(false);
    SetIsBatteries(false);
    SetIsCamera(false);
    SetIsPanels(false);
    SetIsAllProducts(false);
  };

  return (
    <div className=" sm:flex bg-black">
      <section className="bg-[#34bbb4]  sm:w-[300px] h-auto sm:h-screen overflow-x-auto sm:overflow-hidden  sm:flex-col p-5">
        <ul className="flex gap-2 h-fit sm:flex-col sm:gap-5 sm:overflow-y-auto sm:h-[calc(100vh-10rem)]">
          {[
            { label: "All Solar Products", onClick: handleProducts },
            { label: "Inverter", onClick: handleInverter },
            { label: "Batteries", onClick: handleBatteries },
            { label: "Solar Generator", onClick: handleGenaretor },
            { label: "Solar Powered CCTV Camera", onClick: handleCamera },
            { label: "Solar Panels", onClick: handlePanels },
            { label: "MMTP", onClick: handleMttp },
          ].map((item, index) => (
            <li
              key={index}
              onClick={item.onClick}
              className="shadow-md w-[400px] p-2 text-xs sm:w-[17em] hover:text-green-400 sm:hover:text-[#ffffE1] sm:text-[14px] font-bold transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer bg-white rounded-md sm:bg-transparent"
            >
              {item.label}
            </li>
          ))}
        </ul>
      </section>
      <div className="sm:m-4 w-[70%]  text-white sm:w-[75%] overflow-x-auto sm:overflow-hidden">
        {isAllProducts && <AlProducts />}
        {isInverter && <FirstDisplayInver />}
        {isBatteries && <BatteriesFirstDisplay />}
        {isCamera && <Camera />}
        {isPanels && <SolarPanel />}
        {isMttp && <MpptFirstDisplay />}
        {isGenarator && <SolargenaratorFirstDisplay />}
      </div>
    </div>
  );
}

export default Catalogue;
