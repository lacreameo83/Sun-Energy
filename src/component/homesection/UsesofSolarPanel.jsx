import Slider from "react-slick";
import UsesTemplate1 from "../templates/UsesTemplate1";
import UsesTemplate2 from "../templates/UsesTemplate2";

function UsesOfSolarPanel() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    // slidesToScroll: 4,
    arrows: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    pauseOnHover: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container h-[70vh] bg-[#34495e] pl-[40px] mb-11 ">
      <Slider {...settings}>
        <div>
          <UsesTemplate1
            Heading="Solar Panel"
            Purpose=""
            Link=""
            image="https://mercurydirect.com.ng/wp-content/uploads/2017/11/260-Solar-System-1.jpg"
          />
        </div>
        <div>
          <UsesTemplate2
            Heading=" Solar Genarator"
            Purpose=""
            Link=""
            image="https://ae01.alicdn.com/kf/Ha1203db6f9de48b99430e0a862d4b4ffR.jpg?width=750&height=750&hash=1500"
          />
        </div>
        <div>
          <UsesTemplate1
            Heading="Inverter"
            Purpose=""
            Link=""
            image="https://energymall.ng/wp-content/uploads/2021/08/1kva-12v-solar-inverter-PWM.jpg"
          />
        </div>
        <div>
          <UsesTemplate2
            Heading="Solar Street Light"
            Purpose=""
            Link=""
            image="https://5.imimg.com/data5/NP/VH/XY/SELLER-3568152/solar-street-light-500x500-250x250.jpg"
          />
        </div>

        <div>
          <UsesTemplate1
            Heading="CCTV Solar Powered camera"
            Purpose=""
            Link=""
            image="https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/76/7525102/1.jpg?2954"
          />
        </div>
        <div>
          <UsesTemplate2
            Heading="Batteries"
            Purpose=""
            Link=""
            image="https://rspsupply.com/images/content/Solar%20batteries.jpg"
          />
        </div>
        <div>
          <UsesTemplate1
            Heading="Solar Fan"
            Purpose=""
            Link=""
            image="https://images-cdn.ubuy.co.in/63400e728c182f0e6430c402-cowin-solar-fan-system-solar-energy.jpg"
          />
        </div>
        <div>
          <UsesTemplate2
            Heading="Solar Touch"
            Purpose=""
            Link=""
            image="https://kara.com.ng/media/catalog/product/cache/acf1a829635e5a35e3be9ccd68062a20/i/m/img-20240103-wa0014_3.jpg"
          />
        </div>
        <div>
          <UsesTemplate1
            Heading="Solar Electric Meter"
            Purpose=""
            Link=""
            image="https://solarnaturally.com.au/wp-content/uploads/2018/11/Depositphotos_11130530_s-2015.jpg"
          />
        </div>
      </Slider>
    </div>
  );
}

export default UsesOfSolarPanel;
