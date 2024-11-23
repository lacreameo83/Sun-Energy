import React from "react";

function Tubularbattery() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-8 py-6">
      {/* Luminious */}
      <div className="shadow-lg rounded-lg overflow-hidden flex flex-col items-center">
        <h2 className="text-center font-semibold text-lg p-4 bg-gray-100 w-full">
          Luminious
        </h2>
        <img
          className="h-[200px] w-full object-cover"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmWaCEgMZb55igtM0QB1mK2s5ywn8gYGkuGw&s"
          alt="Luminious"
        />
      </div>

      {/* Vercas */}
      <div className="shadow-lg rounded-lg overflow-hidden flex flex-col items-center">
        <h2 className="text-center font-semibold text-lg p-4 bg-gray-100 w-full">
          Vercas
        </h2>
        <img
          className="h-[200px] w-full object-cover"
          src="https://solarmarket.ug/public/uploads/all/ohW9QowpbYuzthD2dVxh8tcC8nlbttDUrSQEX1hQ.webp"
          alt="Vercas"
        />
      </div>

      {/* Nexpro */}
      <div className="shadow-lg rounded-lg overflow-hidden flex flex-col items-center">
        <h2 className="text-center font-semibold text-lg p-4 bg-gray-100 w-full">
          Nexpro
        </h2>
        <img
          className="h-[200px] w-full object-cover"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoWQiDmeVnvaI-RtmSjHurT46XN3-CFR5urg&s"
          alt="Nexpro"
        />
      </div>

      {/* Bara */}
      <div className="shadow-lg rounded-lg overflow-hidden flex flex-col items-center">
        <h2 className="text-center font-semibold text-lg p-4 bg-gray-100 w-full">
          Bara
        </h2>
        <img
          className="h-[200px] w-full object-cover"
          src="https://pictures-nigeria.jijistatic.net/140012561_NjIwLTU4MS02NjJhNTRhMGIz.webp"
          alt="Bara"
        />
      </div>

      {/* Neoea */}
      <div className="shadow-lg rounded-lg overflow-hidden flex flex-col items-center">
        <h2 className="text-center font-semibold text-lg p-4 bg-gray-100 w-full">
          Neoea
        </h2>
        <img
          className="h-[200px] w-full object-cover"
          src="https://image.made-in-china.com/202f0j00eZMiJVHzyhcF/12V-250ah-Solar-Battery-for-Storage-Power-System.jpg"
          alt="Neoea"
        />
      </div>
    </div>
  );
}

export default Tubularbattery;
