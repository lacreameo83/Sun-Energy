
import NavSection from "./NavSection";

function Nav() {
 
  return (
    <div className="sm:px-3 glass-div w-[100vw]  md:px-10  h-[15vh] ">
      <div className="flex text-[10px]  items-center h-[8vh] ">
        <p className=" text-[12px] font-bold">Order Online OR Call us +234 0932351284</p>
      </div>
      {/* containg main Nav inputs */}
      <div>
        <NavSection />
      </div>
    </div>
  );
}

export default Nav;
