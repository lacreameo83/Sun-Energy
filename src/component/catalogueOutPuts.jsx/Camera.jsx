import { useContext } from "react";
import { Globalcontext } from "../context/Globlacontext";

function Camera() {
  const { filteredData } = useContext(Globalcontext);

  return (
    <div className="p-4">
      {/* No Data Message */}
      {filteredData.length === 0 && (
        <div className="text-red-500 text-center font-medium mb-4">
          Nothing found
        </div>
      )}

      {/* Camera Cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredData
          .filter((el) => el.categories === "Solar Camera")
          .map((el) => (
            <div
              key={el.id}
              className="shadow-lg rounded-lg overflow-hidden bg-white hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            >
              {/* Product Title */}
              <p className="text-center p-3 text-lg font-semibold text-gray-800 hover:text-blue-600 transition-colors">
                {el.tittle}
              </p>

              {/* Product Image */}
              <div className="flex items-center justify-center">
                <img
                  className="h-[250px] w-[250px] object-cover hover:scale-105 transition-transform duration-300"
                  src={el.image}
                  alt={el.tittle}
                />
              </div>

              {/* Product Price */}
              <p className="p-4 text-gray-700 font-medium">
                Price:{" "}
                <span className="text-blue-600 font-bold">{el.price}k</span>
              </p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Camera;
