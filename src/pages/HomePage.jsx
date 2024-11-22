import SimpleSlider from "../component/homesection/Home";
import HomeProducts from "../component/homesection/HomeProducts";
import UsesOfSolarPanel from "../component/homesection/UsesofSolarPanel";

function HomePage() {
  return (
    <div className="w-[100vw]">
      <SimpleSlider />
      <HomeProducts />

      <div className="hidden  lg:block">
        <UsesOfSolarPanel />
      </div>
      
    </div>
  );
}

export default HomePage;
