import { useState } from "react";
import Inverter from "./catalogueOutPuts.jsx/Invertter";
import Batteries from "./catalogueOutPuts.jsx/Batteries";
import Camera from "./catalogueOutPuts.jsx/Camera";
import Panels from "./catalogueOutPuts.jsx/Panels";
import Mttp from "./catalogueOutPuts.jsx/Mttp";
import Genarator from "./catalogueOutPuts.jsx/Genarator";
import AlProducts from "./catalogueOutPuts.jsx/AlProducts";

function Catalogue() {
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
    SetIsInverter(true);
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
    SetIsInverter(false);
    SetIsBatteries(false);
    SetIsCamera(false);
    SetIsPanels(true);
    SetIsMttp(false);
    SetIsGenarator(false);
    SetIsAllProducts(false);
  };
  const handleMttp = () => {
    SetIsMttp(true);
    SetIsInverter(false);
    SetIsBatteries(false);
    SetIsCamera(false);
    SetIsPanels(false);
    SetIsGenarator(false);
    SetIsAllProducts(false);
  };
  const handleGenaretor = () => {
    SetIsGenarator(true);
    SetIsMttp(false);
    SetIsInverter(false);
    SetIsBatteries(false);
    SetIsCamera(false);
    SetIsPanels(false);
    SetIsAllProducts(false);
  };

  return (
    <div className="  h-fit grid grid-cols-1   sm:flex ">
      <section className="sm:bg-[#34bbb4]    ">
        <ul className="flex gap-2  h-fit overflow-scroll sm:overflow-hidden sm:flex-col sm:gap-5 p-5">
          <li
            onClick={handleProducts}
            className=" shadow-md p-2 hover:text-green-400 sm:hover:text-[#ffffE1] font-800 text-[14px]  "
          >
            All Solar products
          </li>
          <li
            onClick={handleInverter}
            className="shadow-md p-2 hover:text-green-400  sm:hover:text-[#ffffE1] font-800 text-[14px] "
          >
            Inverter
          </li>
          <li
            onClick={handleBatteries}
            className="shadow-md p-2 hover:text-green-400  sm:hover:text-[#ffffE1] font-800 text-[14px]"
          >
            Batteris
          </li>
          <li
            onClick={handleGenaretor}
            className="shadow-md p-2 hover:text-green-400  sm:hover:text-[#ffffE1] font-800 text-[14px]"
          >
            Solar Genaratior
          </li>
          <li
            onClick={handleCamera}
            className="shadow-md p-2 hover:text-green-400  sm:hover:text-[#ffffE1] font-800 text-[14px]"
          >
            Solar Powered CCTV Camera
          </li>
          <li
            onClick={handlePanels}
            className="shadow-md p-2 hover:text-green-400  sm:hover:text-[#ffffE1] font-800 text-[14px]"
          >
            Solar Panels
          </li>
          <li
            onClick={handleMttp}
            className="shadow-md p-2 hover:text-green-400  sm:hover:text-[#ffffE1] font-600 text-[14px]"
          >
            MMTP
          </li>
        </ul>
      </section>
      <div className="m-4">
        {isAllProducts && <AlProducts />}
        {isInverter && <Inverter />}
        {isBatteries && <Batteries />}
        {isCamera && <Camera />}
        {isPanels && <Panels />}
        {isMttp && <Mttp />}
        {isGenarator && <Genarator />}
      </div>
    </div>
  );
}

export default Catalogue;
