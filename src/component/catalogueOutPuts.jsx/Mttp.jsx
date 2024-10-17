import { useContext } from "react";
import { Globalcontext } from "../context/Globlacontext";

function Mttp() {
  const { filteredData } = useContext(Globalcontext);
  return (
    <div>
      {/* if no data */}
      {filteredData.length ? (
        filteredData.map((item) => <div key={item.id}>{item.title}</div>)
      ) : (
        <div className="text-red-500 nothingFound font-medium">
          Nothing found
        </div>
      )}
      <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
        {filteredData
          .filter((el) => el.categories === "MPPT Charger")
          .map((el) => (
            <div className="shadow-lg ">
              <p
                key={el.id}
                className="text-center p-3 text-[1.1em] font-semibold"
              >
                {el.tittle}
              </p>
              <img className="h-[250px] w-[250px]" src={el.image} />
              <p className="p-4 font-medium ">Price : {el.price}k</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Mttp;
