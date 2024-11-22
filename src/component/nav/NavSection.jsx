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
    <div className="flex items-center gap-1 sm:gap-5 text-[10px]  md:justify-between ">
      <img src={Image} alt="jus solar company logo" className="w-10" />
      <ul className="flex gap-1  sm:gap-5 items-center  md:gap-3 ">
        <Link to="/">
          <li className="hoverItems ">Home</li>
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
  );
}

export default NavSection;
