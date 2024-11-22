import { useContext } from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import { Globalcontext } from "../context/Globlacontext";
import Image from "../../../public/assets/jus-Solat-Logo.png";

function NavSection() {
  const { search, handleSearch } = useContext(Globalcontext);

  // useEffect(() => {
  //   SearchOutPut();
  // }, [search]);
  return (
    <div className="flex w-[100vw]  items-center gap-[1px]  text-[10px]  lg:gap-[110em] ">
      <div>
        <img src={Image} alt="jus solar company logo" className="w-10" />
      </div>
      <div>
        <ul className="flex gap-1  sm:text-[13px] font-bold   sm:gap-5 items-center  md:gap-3 ">
          <Link to="/">
            <li className="hoverItems  ">Home</li>
          </Link>
          <Link to="about">
            <li className="hoverItems">About</li>
          </Link>
          <Link to="catalogue">
            <li className="hoverItems">Catalogue </li>
          </Link>

          {/* <li className="hover:text-green-300">Blog</li> */}
          <Link to="contact">
            <li className="hoverItems">Contact </li>
          </Link>
          <Link to="/projects">
            <li>Projects</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default NavSection;
