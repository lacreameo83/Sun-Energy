import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ServiceTemplate from "../templates/ServiceTemplate";

function HomeProducts() {
  useEffect(() => {
    AOS.init({ duration: 2000, delay: 300 });
  }, []);

  return (
    <div className="w-full mt-2 pb-8 px-4 bg-teal-500 h-fit sm:h-auto flex flex-col justify-around xl:h-[60vh]">
      <p className="text-yellow-500  text-center pt-2  text-2xl sm:text-3xl font-bold">
        Our Services
      </p>
      <h2 className="text-white text-center font-medium text-lg sm:text-xl mb-8">
        {/* Optional subtitle can go here */}
      </h2>
      <div className="flex flex-col gap-8 sm:grid sm:grid-cols-2 lg:grid-cols-3 justify-around">
        <ServiceTemplate
          img="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/52/8551443/1.jpg?3740"
          title="Sales of Solar Products"
          uses={`We sell a range of high-quality solar products designed to meet various energy needs, including:
- Solar Panels: High-efficiency panels for residential, commercial, and industrial use.
- Solar Inverters: Devices that convert DC power into AC for homes and businesses.
- Solar Batteries: Storage solutions for excess solar power.
- Solar Charge Controllers: Efficient systems for reducing energy costs and supporting sustainability.`}
        />
        <ServiceTemplate
          img="https://arka360.com/ros/content/images/2023/05/pasted-image-0--11---1--compressed.jpg"
          title="Solar Installation"
          uses={`We provide expert solar installation services to ensure optimal performance and longevity of your solar systems. Our services include:
- Installation of solar panels, inverters, batteries, and charge controllers.
- Solutions tailored for both residential and commercial applications.
- Professional guidance to maximize your energy efficiency.`}
        />
        <ServiceTemplate
          img="https://5.imimg.com/data5/YX/JH/MY-6617772/solar-panel-maintenance-service-250x250.jpg"
          title="Solar Maintenance"
          uses={`Our maintenance services ensure your solar system operates at its peak. We offer:
- Cleaning and inspecting solar panels.
- Checking and maintaining inverters and wiring.
- Diagnosing performance issues to maximize energy output.
- Scheduled servicing to extend system lifespan.`}
        />
      </div>
    </div>
  );
}

export default HomeProducts;
