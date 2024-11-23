import { Link } from "react-router-dom";
import Image from "../../../public/assets/jus-Solat-Logo.png";
function NavSection() {
  return (
    <div className="flex w-full items-center gap-2 justify-between text-xs sm:text-sm">
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
          <Link to="/catalogue">
            <li className="hoverItems">Catalogue</li>
          </Link>
          <Link to="/contact">
            <li className="hoverItems">Contact</li>
          </Link>
          <Link to="/projects">
            <li className="hoverItems">Projects</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default NavSection;
