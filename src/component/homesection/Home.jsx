import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button } from "@mui/material";

import { Link } from "react-router-dom";
import CustomerSuppport from "../CustomerSuppport";

function SimpleSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,

    autoplay: true,
    autoplaySpeed: 10000,
    pauseOnHover: true,
  };

  return (
    <div className="slider-container overflow-hidden relative sm:h-[80vh] flex items-center  ">
      <div className="h-[600px] px-4  md:px-[30px]  xl:px-[100px] flex justify-center items-center sm:grid sm:grid-cols-2">
        <div className="flex flex-col items-start justify-around h-[580.89px]">
          <div className="h-[378px] flex flex-col gap-[40px] sm:gap-[50px]">
            <div className="">
              <h2 className=" w-[561px]  h-[80px] font-[700] text-[70px] sm:text-[56px] md:text-[96px] xl:text-[96px] text-[#1B1B1B]">
                Jus Solar
              </h2>
              <h2 className="w-[561px] h-[80px] font-[700] text-[70px] sm:text-[56px] md:text-[96px] xl:text-[96px] text-[#1B1B1B]">
                Company
              </h2>
            </div>
            <div>
              <p className="font-[500] text-[22px] xl:text-[22px] opacity-50 ">
                Renewable Solar Solution
              </p>
              <p className="font-[500] text-[22px] xl:text-[22px] opacity-50 ">
                if it is not Jus Solar it is not Solar
              </p>
            </div>

            <button className="font-[600] text-[18px] text-[#ffffff] bg-[#34bbb4] w-[221px] h-[62px] rounded-[12px] p-[20px]">
              Shop How
            </button>
          </div>
          <div className="flex items-center  w-[406px] h-[63px] gap-[30px] ">
            <div className="border-r-[1px] hoverItems pr-3">Inverters</div>
            <div className="border-r-[1px] hoverItems pr-4 text-[#666666]">
              Solar Batteries
            </div>
            <div className="hoverItems">Solar Panels</div>
          </div>
        </div>
        {/* slider part */}
        <div className=" hidden sm:flex items-center justify-center">
          <div className="h-[80%] w-[90%] bg-white">
            <Slider {...settings}>
              <div className="h-[70vh]  sliderOutput-1 w-[100%]">
                {/* second slider */}
              </div>
              <div className="h-[70vh]  sliderOutput-3"></div>
              <div className="h-[70vh]  sliderOutput-1 w-[100%]">
                {/* second slider */}
              </div>
              <div className="h-[70vh] sliderOutput-4"></div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SimpleSlider;
