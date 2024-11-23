import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

function SimpleSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1000,
    pauseOnHover: true,
  };

  return (
    <div className="sm:h-[80vh] flex items-center">
      <div className="h-auto sm:h-[80vh] px-4 md:px-8 xl:px-16 flex justify-center items-center sm:grid sm:grid-cols-2">
        <div className="flex flex-col items-start justify-around h-full">
          <div className="flex flex-col gap-5 md:gap-10">
            <div>
              <h2 className="sm:w-full text-white font-bold text-4xl sm:text-5xl md:text-6xl xl:text-[6em]">
                Jus Solar
              </h2>
              <h2 className="sm:w-full text-white font-bold text-4xl sm:text-5xl md:text-6xl xl:text-[6em]">
                Company
              </h2>
            </div>
            <div>
              <p className="font-medium text-white text-sm xl:text-lg opacity-70">
                Renewable Solar Solution
              </p>
              <p className="font-medium text-white text-sm xl:text-lg opacity-70">
                If it is not Jus Solar, it is not Solar.
              </p>
            </div>
            <Link to="/catalogue">
              <button className="font-semibold text-white bg-teal-500 text-sm w-28 h-10 rounded-lg">
                Shop Now
              </button>
            </Link>
          </div>
          <div className="flex text-white items-center gap-2 sm:gap-5 w-full mt-4">
            <div className="border-r hoverItems pr-2 sm:pr-4">Inverters</div>
            <div className="border-r hoverItems pr-2 sm:pr-4">
              Solar Batteries
            </div>
            <div className="hoverItems">Solar Panels</div>
          </div>
        </div>
        {/* slider part */}
        <div className="hidden lg:flex items-center justify-start h-full">
          <div className=" w-[50vw] ">
            <Slider {...settings}>
              <div className="h-[70vh] sliderOutput-1 w-full"></div>
              <div className="h-[70vh] sliderOutput-3"></div>
              <div className="h-[70vh] sliderOutput-1 w-full"></div>
              <div className="h-[70vh] sliderOutput-4"></div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SimpleSlider;
