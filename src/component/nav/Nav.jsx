import { useState } from "react";
import NavSection from "./NavSection";

function Nav() {
  const [CustomerSupport, setCoustomerSupport] = useState(false);

  const handleCustomers = () => {
    setCoustomerSupport(!CustomerSupport);
  };
  return (
    <div className="px-3   md:px-10 shadow-2xl h-[15vh] relative">
      <div className="flex text-[10px] justify-between items-center h-[8vh] ">
        <p className=" text-[10px] md:text-[12px]">
          ORDER ONLINE OR CALL US +234 0932351284
        </p>
        <div className="flex items-center gap-[2px] font-medium group sm:gap-2">
          <p className="opacity-0 group-hover:opacity-60 ">Need Help ?</p>
          <img
            onClick={handleCustomers}
            className="w-[40px] h-[40px] rounded-full border-[5px] border-green-300 customerSupport sm:w-[60px] sm:h-[60px]"
            src="https://lifetouch.com/wp-content/uploads/2020/07/F20_Hero_BokehLite_1Click_AG_8_2400x3000-scaled.jpg"
            alt="customer Support"
          />
        </div>
      </div>
      {CustomerSupport && (
        <div className="h-[25vh] w-[25vw] absolute bg-white z-30 right-2 mt-2 border-[3px] border-green-400">
          <div className="flex items-center justify-center my-3 flex-col">
            <img
              onClick={handleCustomers}
              className="w-[25px] h-[25px] rounded-full border-[5px] border-green-300 customerSupport sm:w-[60px] sm:h-[60px]"
              src="https://lifetouch.com/wp-content/uploads/2020/07/F20_Hero_BokehLite_1Click_AG_8_2400x3000-scaled.jpg"
              alt="customer Support"
            />
            <p>Welcome to Live Support</p>
          </div>
        </div>
      )}
      {/* containg main Nav inputs */}
      <div>
        <NavSection />
      </div>
    </div>
  );
}

export default Nav;
