import React from "react";
import Call from "../../Call";

function Products({ img, name, onClick }) {
  return (
    <div
      onClick={onClick}
      className="relative bg-white flex items-center justify-center h-[42vh] shadow-lg rounded-md cursor-pointer hover:shadow-xl transition-shadow duration-300"
    >
      <div className="relative w-full">
        {/* Product Name */}
        <p className="text-center mb-2 text-lg font-bold text-gray-800 hover:text-blue-600 transition-colors">
          {name}
        </p>

        {/* Product Image */}
        <img
          className="h-[30vh] w-full object-cover rounded-md hover:scale-105 transition-transform duration-300"
          src={img}
          alt={name}
        />

        {/* Call Button */}
        <div className="absolute bottom-3 right-3">
          <Call />
        </div>
      </div>
    </div>
  );
}

export default Products;
