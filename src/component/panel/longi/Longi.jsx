import React from 'react'
import longidata from './longidata'
function Longi() {
  return (
    <div>
      <h2 className="text-center font-[500] text-[20px] p-2 ">
        All Longi Products
      </h2>
      <div className="grid grid-cols-5 gap-5">
        {longidata.map((el) => {
          return (
            <div className="flex flex-col justify-between items-center h-[40vh] shadow-lg p-2 ">
              <h2>{el.watt} Infinit inverter</h2>
              <img className="h-[30vh] w-[30vw]  " src={el.image} />
              <p>$ {el.price}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Longi
