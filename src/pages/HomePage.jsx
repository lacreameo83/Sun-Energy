import SimpleSlider from "../component/homesection/Home";
import HomeProducts from "../component/homesection/HomeProducts";
import UsesOfSolarPanel from "../component/homesection/UsesofSolarPanel";

function HomePage() {
  return (
    <div>
      <SimpleSlider />
      <HomeProducts />

      <div className="hidden  lg:block">
        <UsesOfSolarPanel />
      </div>
      
    </div>
  );
}

export default HomePage;
