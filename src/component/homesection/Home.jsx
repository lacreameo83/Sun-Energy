import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button } from "@mui/material";

import { Link } from "react-router-dom";
import CustomerSuppport from "../CustomerSuppport";

function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,

    autoplay: true,
    autoplaySpeed: 10000,
    pauseOnHover: true,
  };

  return (
    <div className="slider-container overflow-hidden relative">
      <Slider {...settings}>
        <div className="h-[80vh] bg-slate-600 sliderOutput-1 overflow-scroll">
          <div className="h-[80vh] flex flex-col justify-center items-center gap-3 ">
            <h2 className="text-[25px] HomeRenewed sm:text-[50px]">
              Renewable Solar Solution
            </h2>
            <Link to="/catalogue">
              <Button variant="contained" style={{ background: "#FFC000" }}>
                shop Now
              </Button>
            </Link>
          </div>
          {/* second slider */}
        </div>
        <div className="h-[80vh] bg-slate-600 sliderOutput-2">
          <div className="h-[80vh] flex flex-col justify-center items-center gap-3 ">
            <h2 className="text-[20px] HomeRenewed sm:text-[50px] ">
              Renewable Solar Solution
            </h2>
            <Link to="/catalogue">
              <Button variant="contained" style={{ background: "#FFC000" }}>
                shop Now
              </Button>
            </Link>
          </div>
        </div>
      </Slider>
      <div className="fixed right-10 bottom-10 z-50">
        
        {/* <CustomerSuppport /> */}
      </div>
    </div>
  );
}

export default SimpleSlider;
