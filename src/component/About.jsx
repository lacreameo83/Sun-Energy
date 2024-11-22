import { Button } from "@mui/material";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="h-[92vh]  bg-black text-white sm:h-[120vh] md:h-[110vh] xl:h-[120vh]  p-2 ">
      <h1 className="text-center font-bold text-[20px] my-2">About Us</h1>
      <div className="grid grid-cols-1 h-fit sm:grid-cols-2">
        <div className=" flex items-center justify-center">
          
          <div className="hidden sm:block w-[400px] h-[400px] sliderOutput-1"></div>
        </div>

        <div className="flex flex-col justify-evenly p-4">
          <div>
            <h2 className="font-bold  sm:text-[15px] my-1">
              JUS SOLAR is an Indigenous Company Incorporated in 2018 with RC:
              1525204 to carry out the business of Renewable Energy Ranging from
              SALES, DESIGNS & INSTALLATION of all kinds of solar products for
              Industrial & Domestic purposes.
            </h2>
            <p className="text-[12px]">
              We are committed to providing the highest quality products &
              services at competitive prices with technical support by highly
              trained technical personnel providing added-value to you. In:
            </p>
          </div>
          <div>
            <p className=" font-bold text-[15px] my-1">WHAT WE DO :</p>
            <ol className="text-[12px]">
              <li> SALES OF SOLAR PRODUCTS.</li>
              <li> ELECTRICAL ENGINEERING </li>
              <li> SOLAR ENERGY SYSTEM DESIGNS .</li>
              <li> SECURITY & CONTROL SYSTEMS</li>
              <li>BUILDING AUTOMATION SYSTEMS.</li>
              <li> ENERGY AUTOMATION SYSTEMS</li>
              <li> ENERGY MANAGEMENT & POWER SUPPORT</li>
            </ol>
          </div>
          <div>
            <p className=" font-bold text-[12px] my-1">OUR GOAL:</p>

            <p className="text-[10px]">
              To continue to drive forward offering new Technology, Products,
              Services & Business methods, our vast products offering also
              encompasses customized designs, electrical automation HVAC
              &Network Communication Systems and components
            </p>
            <p className=" font-bold text-[12px] my-1">MISSION STATEMENT:</p>
            <p className="text-[10px]">
              JUS SOLAR is committed to providing the best quality products &
              services at competitive prices with services & technical support
              exceeding our customers’ expectations by our highly trained
              technical personnel’s
            </p>
            <p className=" font-bold text-[12px] my-1">OUR VISION:</p>
            <p className="text-[10px]">
              Power is cornerstones of life, they will be continually needed for
              products & services to Harness its use. JUS SOLAR will strive to
              be the best-in-class as distributor of quality solar products and
              services and a responsible corporate citizen
            </p>
            <p className=" font-bold text-[12px] my-1">QUALITY POLICY:</p>
            <p className="text-[10px]">
              JUS SOLAR empowers all employees to create, implement and improve
              our services to meet & exceed external & internal customers’
              expectations.
            </p>
            <p className="text-[10px]">
              JUS SOLAR pledges to train all personnel in continuous process
              improvement to provide the financial resources necessary to
              continuous process improvement and to create
            </p>

            <Link to="/contact">
              <Button
                variant="contained"
                style={{
                  marginTop: "10px",
                  background: "#34bbb4",
                  width: "100px",
                  fontSize: "10px",
                }}
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
