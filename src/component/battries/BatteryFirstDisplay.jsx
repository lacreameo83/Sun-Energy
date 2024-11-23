import React, { useState, useContext } from "react";
import SMFBattery from "./smf/SMFBattery";
import Tubularbattery from "./tubular/Tubularbattery";
import Lithiumbattery from "./lithium/Lithiumbattery";
import { Globalcontext } from "../context/Globlacontext";
import Products from "../templates/Products";

function BatteriesFirstDisplay() {
  const { batterydisplay, setbatterydisplay } = useContext(Globalcontext);
  const [activeProduct, setActiveProduct] = useState(null);

  const handleProductClick = (product) => {
    setActiveProduct(product);
    setbatterydisplay(false);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-6">
      {batterydisplay ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <Products
            onClick={() => handleProductClick("SMF")}
            name="SMF Battery"
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMg5zmOFmiSZ9-nH_G5_pAgHpuXBDVe4ouDg&s"
            className="hover:scale-105 transition-transform duration-300"
          />
          <Products
            onClick={() => handleProductClick("Tubular")}
            name="Tubular Batteries"
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2rPAsieTyY0rr7eK1aUM2PDKtCw0bOHKQ8Q&s"
            className="hover:scale-105 transition-transform duration-300"
          />
          <Products
            onClick={() => handleProductClick("Lithium")}
            name="Lithium Batteries"
            img="https://cdn-enoih.nitrocdn.com/kzltgafZecVglpUbyWKFCjKzSdhSUWWa/assets/images/optimized/rev-103eb43/sakopower.com/wp-content/uploads/2022/09/Li-Sun-3.jpg"
            className="hover:scale-105 transition-transform duration-300"
          />
        </div>
      ) : (
        <div>
          {activeProduct === "SMF" && <SMFBattery />}
          {activeProduct === "Tubular" && <Tubularbattery />}
          {activeProduct === "Lithium" && <Lithiumbattery />}
        </div>
      )}
    </div>
  );
}

export default BatteriesFirstDisplay;
