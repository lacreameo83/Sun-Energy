import React, { useState } from "react";
import InfinitInverter from "./InfinitInverter";
import FelicityInverter from "../felicity/FelicityInverter";
import LuminiousInverter from "../luminious/LuminiousInverter";

function FirstDisplayInver() {
  const [inverterdisplay, setinverterdisplay] = useState(true);
  const [infinitproduct, setinfinitproduct] = useState(false);
  const [felicityProduct, setfelicityProduct] = useState(false);
  const [lumionsinverter, setlumionsinverter] = useState(false);

  const handleinfinitproduct = () => {
    setinfinitproduct(true);
    setinverterdisplay(false);
    setfelicityProduct(false);
    setlumionsinverter(false);
  };

  const handlefelicityProduct = () => {
    setfelicityProduct(true);
    setinverterdisplay(false);
    setinfinitproduct(false);
    setlumionsinverter(false);
  };

  const handlelumionsinverter = () => {
    setlumionsinverter(true);
    setfelicityProduct(false);
    setinverterdisplay(false);
    setinfinitproduct(false);
  };

  return (
    <div className="w-full md:w-[80vw] mx-auto">
      {inverterdisplay && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-7 w-full">
          <div
            className="shadow-lg h-[40vh] p-4 cursor-pointer hover:scale-105 transition-transform duration-300"
            onClick={handleinfinitproduct}
          >
            <h2 className="text-center font-semibold text-lg">
              Infinit Inverter Solar products
            </h2>
            <img
              className="h-[30vh] w-full object-cover mt-2 rounded-md"
              src="https://img1.wsimg.com/isteam/ip/0d4b8227-d2d3-41b8-8f27-8f8ec087768e/5500W%2048V%20INVERTER.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:388,h:388,cg:true"
              alt="infinit product"
            />
          </div>
          <div
            onClick={handlefelicityProduct}
            className="shadow-lg h-[40vh] p-4 cursor-pointer hover:scale-105 transition-transform duration-300"
          >
            <h2 className="text-center font-semibold text-lg">
              Felicity Inverter products
            </h2>
            <img
              className="h-[30vh] w-full object-cover mt-2 rounded-md"
              src="https://solarmall.ng/wp-content/uploads/2024/03/Felicity-Solar-5KVA-48V-3KVA-24V-Hybrid-Inverter-5.jpg"
              alt="felicity inverter"
            />
          </div>
          <div
            onClick={handlelumionsinverter}
            className="shadow-lg h-[40vh] p-4 cursor-pointer hover:scale-105 transition-transform duration-300"
          >
            <h2 className="text-center font-semibold text-lg">
              Luminious Inverter products
            </h2>
            <img
              className="h-[30vh] w-full object-cover mt-2 rounded-md"
              src="https://cdn11.bigcommerce.com/s-x3ki4mm/images/stencil/1280x1280/products/3180/4306/Solar_PCU_6KW_96V_Luminous__05300.1585725266.jpg?c=2?imbypass=on"
              alt="luminious inverter"
            />
          </div>
        </div>
      )}

      {/* Product Details */}
      <div>
        {infinitproduct && <InfinitInverter />}
        {felicityProduct && <FelicityInverter />}
        {lumionsinverter && <LuminiousInverter />}
      </div>
    </div>
  );
}

export default FirstDisplayInver;
