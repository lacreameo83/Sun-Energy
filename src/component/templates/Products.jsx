import React from 'react'
import Call from '../../Call';

function Products({ img, name, onClick }) {
  return (
    <div
      onClick={onClick}
      className=" sm:w-[18vw] bg-white h-[40vh] shadow-lg  "
    >
      <div className="relative">
        <p className="text-center text-[700]">{name}</p>
        <img className="h-[30vh] sm:w-[15vw]" src={img} />
        <div className="absolute right-3">
          <Call />
        </div>
      </div>
    </div>
  );
}

export default Products
