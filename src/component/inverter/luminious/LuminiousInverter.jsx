import React from "react";
import luminiousdata from "./luminiosdata";

function LuminiousInverter() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-6">
      <h2 className="text-center  font-semibold text-lg md:text-xl lg:text-2xl mb-4">
        All Luminous Inverter Products
      </h2>
      <div className="grid text-black grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {luminiousdata.map((el, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-between bg-white shadow-lg rounded-md p-4 transition-transform hover:scale-105"
          >
            <h3 className="text-center font-medium text-base md:text-lg">
              {el.kva} KVA Luminous Inverter
            </h3>
            <img
              className="h-[25vh] w-full object-cover mt-2 rounded-md"
              src={el.image}
              alt={`${el.kva} KVA Luminous Inverter`}
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

export default LuminiousInverter;
