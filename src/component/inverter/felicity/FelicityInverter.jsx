import React from "react";
import felicitydata from "./felicitydata";

function FelicityInverter() {
  return (
    <div className="w-full text-black max-w-7xl mx-auto px-4 md:px-8 py-6">
      <h2 className="text-center text-white font-semibold text-lg md:text-xl lg:text-2xl mb-4">
        All Felicity Inverter Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {felicitydata.map((el, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-between bg-white shadow-lg rounded-md p-4 transition-transform hover:scale-105"
          >
            <h3 className="text-center font-medium text-base md:text-lg">
              {el.kva} KVA Felicity Inverter
            </h3>
            <img
              className="h-[25vh] w-full object-cover mt-2 rounded-md"
              src={el.image}
              alt={`${el.kva} KVA Inverter`}
            />
            <p className="text-center font-semibold text-sm md:text-base mt-2">
              $ {el.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FelicityInverter;
