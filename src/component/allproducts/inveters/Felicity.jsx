import React from "react";
import data from "../../lib/Data";

function FelicityPanel() {
  // Access the Solar Inverters data
  const solarInverters = data[0]["Solar Inverters"]; // Accessing the "Solar Inverters" category

  // Access the Felicity subcategory
  const felicityInverters = solarInverters.Felicity || []; // Fallback to an empty array if undefined

  return (
    <div className="h-[100vh] px-8 py-4 flex flex-col items-center  w-full bg-black overflow-auto ">
      <h2 className="p-3 text-white text-[30px]">Felicity Inverters </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-3 ">
        {felicityInverters.length > 0 ? (
          felicityInverters.map((item, index) => (
            <div key={index} className="p-4">
              <img src={item.image} alt={item.name} className="h-80 w-80" />
              <p className="text-white text-[20px] text-center mt-2">
                {item.name}
              </p>
            </div>
          ))
        ) : (
          <div className="text-white">No Solar Generators found</div>
        )}
      </div>
    </div>
  );
}

export default FelicityPanel;
