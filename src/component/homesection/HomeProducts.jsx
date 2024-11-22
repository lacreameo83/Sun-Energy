import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import ServiceTemplate from "../templates/ServiceTemplate";

function HomeProducts() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      className="h-fit mt-2 pb-8 px-4   sm:h-[76vh] xl:h-[55vh]   bg-[#34bbb4] "
      // data-aos="zoom-in"
      // data-aos-duration="2000"
      // data-aos-delay="300"
    >
      <p className="text-[#FFC000] text-center pt-[10px] mb-12  text-[30px] font-[700]">
        Our Services
      </p>
      <h2 className="font-[500] text-[20px]  mb-12 text-center">
        {/* Sustainable Energy */}
      </h2>

      <div className="flex flex-col gap-[59px] sm:flex sm:flex-row justify-around">
        <ServiceTemplate
          img="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/52/8551443/1.jpg?3740"
          title="Sales of Solar Product"
          uses="We sell a range of high-quality solar products designed to meet various energy needs, including:Solar Panels – High-efficiency panels suitable for residential, commercial, and industrial use.Solar Inverters – Devices that convert DC power from the panels into AC power for homes and businesses.
Solar Batteries – Storage solutions for keeping excess solar power.
Solar Charge Controllers –These products are designed to reduce energy costs, offer more grid independence, and support sustainable energy use.






"
        />
        <ServiceTemplate
          img="https://arka360.com/ros/content/images/2023/05/pasted-image-0--11---1--compressed.jpg"
          title="Solar Installation"
          uses="We provide a wide range of solar products and installation services to meet diverse energy needs. Our offerings include solar panels, inverters, batteries, mounting systems, and solar charge controllers. Additionally, we offer expert solar installation services to ensure optimal performance and longevity of your solar setup, tailored to both residential and commercial applications.






"
        />
        <ServiceTemplate
          img="https://5.imimg.com/data5/YX/JH/MY-6617772/solar-panel-maintenance-service-250x250.jpg"
          title="Solar Maintenance"
          uses="We provide reliable Solar Maintenance services to ensure your solar systems operate at peak performance. Our maintenance offerings include cleaning and inspecting panels, checking inverters, assessing wiring, and identifying any performance issues. With regular maintenance, we help extend the life of your solar system and maximize your energy output.






"
        />
      </div>
    </div>
  );
}

export default HomeProducts;
