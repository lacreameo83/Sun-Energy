import React from "react";
import data from "../../lib/Data";

function SolarStreetLightPanel() {
  // Access the Solar Street Light data
  const solarStreetLights = data[0]["Solar Street Light"]; // Accessing the first object and its "Solar Street Light" key

  return (
    <div className="h-[120vh] px-8 py-4 flex flex-col items-center  w-full bg-black overflow-auto ">
      <h2 className="p-3 text-white text-[30px]">Solar Street Light </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-3 ">
        {solarStreetLights.length > 0 ? (
          solarStreetLights.map((item, index) => (
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

export default SolarStreetLightPanel;
