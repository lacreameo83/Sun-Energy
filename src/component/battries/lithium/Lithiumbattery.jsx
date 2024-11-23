import React from "react";

function Lithiumbattery() {
  return (
    <div className="grid grid-cols-1 text-black sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-8 py-6">
      <div className="shadow-lg rounded-lg overflow-hidden">
        <h2 className="text-center font-semibold text-lg p-4 bg-gray-100">
          Solar Pro
        </h2>
        <img
          className="h-[200px] w-full object-cover"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWEmoIkKqmAL7gV5e643QT2pr3dNl93lHCCeNQOCcZleocshbEx1Nb6mK1iQnwgJO-6TQ&usqp=CAU"
          alt="Solar Pro"
        />
      </div>
      <div className="shadow-lg rounded-lg overflow-hidden">
        <h2 className="text-center font-semibold text-lg p-4 bg-gray-100">
          Infini Solar
        </h2>
        <img
          className="h-[200px] w-full object-cover"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvgidC8rY3IS9xRWDl7SMpsHS8ApBdrSEgwg&s"
          alt="Infini Solar"
        />
      </div>
      <div className="shadow-lg rounded-lg overflow-hidden">
        <h2 className="text-center font-semibold text-lg p-4 bg-gray-100">
          C Worth
        </h2>
        <img
          className="h-[200px] w-full object-cover"
          src="https://i0.wp.com/energymall.ng/wp-content/uploads/2023/10/H10a50d40cd7f4465bf0feb89e1825a3bN.jpg_720x720q50.webp?fit=640%2C640&ssl=1"
          alt="C Worth"
        />
      </div>
      <div className="shadow-lg rounded-lg overflow-hidden">
        <h2 className="text-center font-semibold text-lg p-4 bg-gray-100">
          Felicity
        </h2>
        <img
          className="h-[200px] w-full object-cover"
          src="https://image.made-in-china.com/202f0j00GedVvtQsAmRC/Sunark-Felicity-Solar-Lithium-Battery-High-Voltage-10kw-20kw-Energy-Storage-Batteries-with-BMS-Power-Supply.webp"
          alt="Felicity"
        />
      </div>
    </div>
  );
}

export default Lithiumbattery;
