import { useContext } from "react";
import { Button } from "@mui/material";
import { Globalcontext } from "../context/Globlacontext";

function AlProducts() {
  const { filteredData } = useContext(Globalcontext);
  return (
    <div className="grid grid-cols-2  h-fit gap-5 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4">
      <div className="w-[45vw] shadow-lg  h-[50vh] relative group sm:w-[20vw]">
        {/* if no data */}
        {filteredData.length ? (
          filteredData.map((item) => <div key={item.id}>{item.title}</div>)
        ) : (
          <div className="text-red-500 nothingFound font-medium">
            Nothing found
          </div>
        )}
        <div>
          {filteredData
            .filter((el) => el.id === 5)
            .map((el) => (
              <div key={el.key}>
                <h2 className="py-3 text-center font-medium text-[18px]">
                  Inverter
                </h2>

                <img className="h-[250px]" src={el.image} />
              </div>
            ))}
        </div>

        <div className="absolute ml-2  font-medium bottom-2  opacity-0 group-hover:opacity-100  transition-all duration-300 ">
          <Button variant="contained" sx={{ background: "#34bbb4" }}>
            View products
          </Button>
        </div>
      </div>
      {/* 2 */}
      <div className="shadow-lg w-[45vw] h-[50vh] relative group sm:w-[20vw]">
        {filteredData
          .filter((el) => el.id === 10)
          .map((el) => (
            <div key={el.id}>
              <h2 className="py-3 text-center font-medium text-[18px]">MTTP</h2>

              <img className="h-[250px]" src={el.image} />
            </div>
          ))}
        <div className="absolute ml-2   font-medium bottom-2  opacity-0 group-hover:opacity-100 transition-all duration-300 ">
          <Button variant="contained" sx={{ background: "#34bbb4" }}>
            View products
          </Button>
        </div>
      </div>
      {/* 3 */}
      <div className="w-[45vw] shadow-lg  h-[50vh] relative group sm:w-[20vw]">
        {filteredData
          .filter((el) => el.id === 14)
          .map((el) => (
            <div key={el.id}>
              <h2 className="py-3 text-center font-medium text-[18px]">
                CCTV Solar Camera
              </h2>

              <img className="h-[250px]" src={el.image} />
            </div>
          ))}
        <div className="absolute ml-2   font-medium bottom-2  opacity-0 group-hover:opacity-100 transition-all duration-300 ">
          <Button variant="contained" sx={{ background: "#34bbb4" }}>
            View products
          </Button>
        </div>
      </div>
      {/* 4 */}
      <div className="w-[45vw] shadow-lg  h-[50vh] relative group sm:w-[20vw]">
        {filteredData
          .filter((el) => el.id === 18)
          .map((el) => (
            <div key={el.id}>
              <h2 className="py-3 text-center font-medium text-[18px]">
                Solar Powered Fan
              </h2>

              <img className="h-[250px]" src={el.image} />
            </div>
          ))}
        <div className="absolute ml-2  font-medium bottom-2  opacity-0 group-hover:opacity-100 transition-all duration-300 ">
          <Button variant="contained" sx={{ background: "#34bbb4" }}>
            View products
          </Button>
        </div>
      </div>
      {/* 5 */}
      <div className="w-[45vw] shadow-lg  h-[50vh] relative group sm:w-[20vw]">
        {filteredData
          .filter((el) => el.id === 22)
          .map((el) => (
            <div key={el.key}>
              <h2 className="py-3 text-center font-medium text-[18px]">
                Mobile Genaratior
              </h2>

              <img className="h-[250px]" src={el.image} />
            </div>
          ))}
        <div className="absolute ml-2   font-medium bottom-2  opacity-0 group-hover:opacity-100 transition-all duration-300 ">
          <Button variant="contained" sx={{ background: "#34bbb4" }}>
            View products
          </Button>
        </div>
      </div>
      {/* 6 */}
      <div className="w-[45vw] shadow-lg  h-[50vh] relative group sm:w-[20vw]">
        {filteredData
          .filter((el) => el.id === 25)
          .map((el) => (
            <div key={el.id}>
              <h2 className="py-3 text-center font-medium text-[18px]">
                Batterie
              </h2>

              <img className="h-[250px]" src={el.image} />
            </div>
          ))}
        <div className="absolute ml-2   font-medium bottom-2  opacity-0 group-hover:opacity-100 transition-all duration-300 ">
          <Button variant="contained" sx={{ background: "#34bbb4" }}>
            View products
          </Button>
        </div>
      </div>
      <div className="w-[45vw] shadow-lg  h-[50vh] relative group sm:w-[20vw]">
        {filteredData
          .filter((el) => el.id === 20)
          .map((el) => (
            <div key={el.id}>
              <h2 className="py-3 text-center font-medium text-[18px]">
                Solar Sreet Light
              </h2>

              <img className="h-[250px]" src={el.image} />
            </div>
          ))}
        <div className="absolute ml-2   font-medium bottom-2  opacity-0 group-hover:opacity-100 transition-all duration-300 ">
          <Button variant="contained" sx={{ background: "#34bbb4" }}>
            View products
          </Button>
        </div>
      </div>
    </div>
  );
}

export default AlProducts;
