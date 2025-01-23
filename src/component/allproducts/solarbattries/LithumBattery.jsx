import React from "react";
import data from "../../lib/Data";

function LithiumBatteriesPanel() {
  // Access the Lithium Batteries data
  const lithiumBatteries = data[0]["Solar Batteries"].Lithium; // Accessing the Lithium Batteries subset

  return (
    <div className="h-[100vh] px-8 py-4 flex flex-col items-center  w-full bg-black overflow-auto ">
      <h2 className="p-3 text-white text-[30px]">Lithium Batteries </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-3">
        {lithiumBatteries.length > 0 ? (
          lithiumBatteries.map((item, index) => (
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

export default LithiumBatteriesPanel;
