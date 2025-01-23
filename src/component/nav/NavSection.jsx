import { Link } from "react-router-dom";
import Image from "../../../public/assets/jus-Solat-Logo.png";
import { useState } from "react";
function NavSection() {

  const [menu, setMenu] = useState(false);
  const [solarenter,handleSolarPanelEnterEnter]=useState(false)
  const [inverter,handleinverter]=useState(false)
const [batteries,handlebatteries]=useState(false)
  // Show menu when hovering over the container or menu
  const handleMouseEnter = () => setMenu(true);
  const handleMouseLeave = () => setMenu(false);

  return (
    <div className="flex w-full relative items-center gap-2 justify-between text-xs sm:text-sm">
      <div>
        <img
          src={Image}
          alt="jus solar company logo"
          className="w-10 flex-shrink-0"
        />
      </div>
      <div>
        <ul className="flex gap-2 sm:gap-4 md:gap-6 font-bold items-center list-none p-0 m-0">
          <Link to="/">
            <li className="hoverItems">Home</li>
          </Link>
          <Link to="/about">
            <li className="hoverItems">About</li>
          </Link>
          <Link>
            <div
              // onMouseEnter={handlehover}
              // onMouseLeave={() => setmousehover(false)}

              // onMouseOut={() => setmousehover(false)}
              className=" group"
              // onClick={handleMouseEnter}
              // onMouseLeave={handleMouseLeave}
            >
              <p> products</p>

              <div
                className="absolute hidden group-hover:block md:w-[100vw] md:left-0 left-0   sm:w-[60vw] sm:left-[20%] bg-white  p-4"
                // onMouseEnter={handleMouseEnter} // Keep menu open when hovering over it
                // onMouseLeave={handleMouseLeave} // Close menu when not hovering
              >
                <ul className="flex items-center justify-center space-x-1 sm:space-x-3">
                  <li
                    onClick={() => handleSolarPanelEnterEnter(!solarenter)}
                    className="hover:bg-gray-100 relative   p-2"
                  >
                    Solar Panel
                    {solarenter && (
                      <Link to="/panels">
                        <div className=" absolute top-full w-fit left-0 bg-white border shadow-lg p-4 ">
                          Monocrystalline
                        </div>
                      </Link>
                    )}
                  </li>

                  <li
                    onClick={() => handleinverter(!inverter)}
                    className="hover:bg-gray-100 relative p-2"
                  >
                    Solar Inverter
                    {inverter && (
                      <Link to="">
                        <div className=" absolute top-full w-[28vw]  sm:w-full left-0 bg-white border shadow-lg p-4 ">
                          <Link to="/infinit">
                            <p className="py-3">Infinit</p>
                          </Link>
                          <Link to="/felicity">
                            <p className="py-3">Felicity</p>
                          </Link>
                          <Link to="/luminious">
                            <p className="py-3">luminious</p>
                          </Link>
                        </div>
                      </Link>
                    )}
                  </li>
                  <Link to="solargenarator">
                    <li className="hover:bg-gray-100 p-2">Solar Genarator</li>
                  </Link>
                  <Link to="/streetlight">
                    <li className="hover:bg-gray-100 p-2">
                      Solar Street Light
                    </li>
                  </Link>

                  <li
                    onClick={() => handlebatteries(!batteries)}
                    className="hover:bg-gray-100 relative p-2"
                  >
                    Solar Batteries
                    {batteries && (
                      <Link to="">
                        <div className=" absolute top-full w-[28vw] sm:w-[12vw] left-0 bg-white border shadow-lg p-4 ">
                          <Link to="/tubular">
                            <p className=" py-3 ">Tubular Batteries</p>
                          </Link>
                          <Link to="/lithum">
                            <p className="py-3 ">Lithum Battery</p>
                          </Link>
                        </div>
                      </Link>
                    )}
                  </li>
                  <Link to="solarfan">
                    <li className="hover:bg-gray-100  p-2">Solar Fan</li>
                  </Link>
                  <Link to="solarcamera">
                    <li className="hover:bg-gray-100 p-2">Solar Camera</li>
                  </Link>
                </ul>
              </div>
            </div>
          </Link>
          <Link to="/contact">
            <li className="hoverItems">Contact</li>
          </Link>
          <Link to="/projects">
            <li className="hoverItems">Projects</li>
          </Link>
        </ul>
      </div>
      <div></div>
    </div>
  );
}

export default NavSection;
