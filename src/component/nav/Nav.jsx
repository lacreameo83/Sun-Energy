import NavSection from "./NavSection";

function Nav() {
  return (
    <div className="sm:px-3 h-[10vh]   glass-div w-full md:px-10 sm:min-h-[15vh]">
      {" "}
      {/* Changed w-[100vw] to w-full and h-[15vh] to min-h-[15vh] */}
      <div className="sm:flex hidden text-[10px] items-center min-h-[8vh]">
        {" "}
        {/* Changed h-[8vh] to min-h-[8vh] */}
        <p className="text-[12px] font-bold">
          Order Online OR Call us +234 0932351284
        </p>
      </div>
      {/* Main Nav inputs */}
      <div className="h-[8vh] sm: flex items-center">
        <NavSection />
      </div>
    </div>
  );
}

export default Nav;
