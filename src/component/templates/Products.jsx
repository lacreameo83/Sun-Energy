import React from 'react'
import Call from '../../Call';

function Products({ img, name, onClick }) {
  return (
    <div
      onClick={onClick}
      className="   bg- flex items-center justify-center h-[42vh] shadow-lg  "
    >
      <div className="relative">
        <p className="text-center mb-2 text-[700]">{name}</p>
        <img className="h-[30vh] w-full mb-2 " src={img} />
        <div className="absolute right-3">
          <Call />
        </div>
      </div>
    </div>
  );
}

export default Products
