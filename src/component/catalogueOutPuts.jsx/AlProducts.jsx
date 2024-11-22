import { useState } from "react";
import FirstDisplayInver from "../inverter/infinit/FirstDisplayInver";
import Products from "../templates/Products";
import MpptFirstDisplay from "../mppt/MpptFirstDispaly";
import SolarPanel from "../panel/SolarPanel";
import Camera from "./Camera";
import SolargenaratorFirstDisplay from "../solargenarator/SolargenaratorFirstDisplay";
import BatteriesFirstDisplay from "../battries/BatteryFirstDisplay";

function AlProducts() {
  const [selectedProduct, setSelectedProduct] = useState("allProducts");

  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div className="w-full max-w-7xl mx-auto py-10">
      {/* All Products Grid */}
      {selectedProduct === "allProducts" ? (
        <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4">
          <Products
            onClick={() => handleSelectProduct("inverter")}
            name="Inverter"
            img="https://energymall.ng/wp-content/uploads/2021/08/1kva-12v-solar-inverter-PWM.jpg"
          />
          <Products
            onClick={() => handleSelectProduct("battery")}
            name="Battery"
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCTGPLU4r6OWC40yhctwvCTWlPW9fGoLXYug&s"
          />
          <Products
            onClick={() => handleSelectProduct("generator")}
            name="Solar Generator"
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxhMSibRnpfP4rQx3erCFt4OdZcuw9moNWTQ&s"
          />
          <Products
            onClick={() => handleSelectProduct("camera")}
            name="Solar CCTV Camera"
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmZ_JsIFKSPDYso7C50UX090KM886CrDObjg&s"
          />
          <Products
            onClick={() => handleSelectProduct("panels")}
            name="Solar Panels"
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW5W9btfybVCGHSQ4hdXGO3K7sjtVgQuL6mw&s"
          />
          <Products
            onClick={() => handleSelectProduct("controller")}
            name="Solar Charger Controller"
            img="https://image.made-in-china.com/2f0j00ImJlyEUzZPqL/50A-Mttp-Solar-Charger-Controller-Solar-System-PWM-Solar-Charge-Controller.webp"
          />
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center w-full">
          {selectedProduct === "inverter" && <FirstDisplayInver />}
          {selectedProduct === "battery" && <BatteriesFirstDisplay />}
          {selectedProduct === "generator" && <SolargenaratorFirstDisplay />}
          {selectedProduct === "panels" && <SolarPanel />}
          {selectedProduct === "camera" && <Camera />}
          {selectedProduct === "controller" && <MpptFirstDisplay />}
        </div>
      )}
    </div>
  );
}

export default AlProducts;
