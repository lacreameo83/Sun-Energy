import { Button } from "@mui/material";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="h-[92vh] sm:h-[80vh] p-2 ">
      <h1 className="text-center font-bold text-[25px] my-5">About Us</h1>
      <div className="grid grid-cols-1 h-[60vh] sm:grid-cols-2">
        <div className="hidden sm:block sliderOutput-1"></div>
        <div className="flex flex-col justify-evenly p-4">
          <div>
            <h2 className="font-bold text-[25px] my-2">
              We Have Everything You Need
            </h2>
            <p>
              All our products and services can stand the test of time and the
              initial investment can be compensated for in the consistent
              benefits that our customers stand to enjoy over a long period of
              use of all our products
            </p>
          </div>
          <div>
            <p className=" font-bold text-[15px] my-2">Our Major Products:</p>
            <ol>
              <li> Solar Panels.</li>
              <li>Inverters</li>
              <li> Solar Charge Controllers.</li>
              <li>Deep Cycle Batteries</li>
              <li>Solar Accessories.</li>
              <li>Solar Fans</li>
              <li>CCTV Solar Powered Camera</li>
              <li>Solar Street Light</li>
            </ol>
          </div>
          <div>
            <p className=" font-bold text-[15px] my-2">
              The Services rendered:
            </p>
            <ol>
              <li> Sales of Solar and Renewable Energy Equipment.</li>
              <li>
                Design and installation of different Solar energy systems such
                as PV- Diesel systems, Grid Tie Systems, Battery Based Systems
                etc
              </li>
              <li>Installation and maintenance of Solar Equipment.</li>
              <li>
                Advisory Services on the use and maintenance of renewable energy
                equipment
              </li>
            </ol>
            <Link to="/contact">
              <Button
                variant="contained"
                style={{ marginTop: "10px", background: "#34bbb4" }}
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
