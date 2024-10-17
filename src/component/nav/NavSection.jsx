import { useContext } from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import { Globalcontext } from "../context/Globlacontext";
import  Image  from  '../../../public/assets/jus-Solat-Logo.png'

function NavSection() {
  const { search, handleSearch } = useContext(Globalcontext);

  // useEffect(() => {
  //   SearchOutPut();
  // }, [search]);
  return (
    <div className="flex items-center gap-5   md:justify-between ">
      <img src={Image} alt="jus solar company logo" className="w-12" />
      <ul className="flex gap-5 items-center  md:gap-10 ">
        <Link to="/">
          <li className="hover:text-green-300 ">Home</li>
        </Link>
        <Link to="about">
          <li className="hover:text-green-300">About</li>
        </Link>
        <Link to="catalogue">
          <li className="hover:text-green-300">Catalogue </li>
        </Link>

        {/* <li className="hover:text-green-300">Blog</li> */}
        <Link to="contact">
          <li className="hover:text-green-300">Contact Us</li>
        </Link>
      </ul>
      <div>
        <input
          className="hidden  md:block outline-[none] rounded-lg  border-[2px] p-1 w-80 "
          type="text"
          placeholder="search"
          onChange={handleSearch}
          value={search}
        />
        {/* for small screen */}
        <div className="block hover:text-green-400 cursor-pointer sm:hidden md:hidden lg:hidden ">
          <SearchIcon />
        </div>
      </div>
    </div>
  );
}

export default NavSection;
