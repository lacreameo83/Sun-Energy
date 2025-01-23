import { useEffect } from "react";
import AllProjects from "./component/works/AllProjects";
import { NavPage, HomePage, AboutPage, ContactPage, CataloguePage } from "./pages";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FirstDisplayInver from "./component/inverter/infinit/FirstDisplayInver";
import Panel from "./component/allproducts/Panels/Panel";
import FelicityPanel from "./component/allproducts/inveters/Felicity";
import InfinitPanel from "./component/allproducts/inveters/Infinit";
import LuminousPanel from "./component/allproducts/inveters/Luminious";
import SolarGeneratorPanel from "./component/allproducts/solargenarator/SolarGenarator";
import SolarStreetLightPanel from "./component/allproducts/streetlight/StreetLight";
import TubularBatteriesPanel from "./component/allproducts/solarbattries/TubularBattery";
import LithiumBatteriesPanel from "./component/allproducts/solarbattries/LithumBattery";
import SolarFan from "./component/allproducts/solarfan/SolarFan";
import SolarCamera from "./component/allproducts/solarcamera/SolarCamera";
const router = createBrowserRouter([
  {
    path: "/",
    element: <NavPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "/catalogue",
        element: <CataloguePage />,
      },
      {
        path: "/panels",
        element: <Panel />,
      },
      {
        path: "/felicity",
        element: <FelicityPanel />,
      },
      {
        path: "/infinit",
        element: <InfinitPanel />,
      },
      {
        path: "/luminious",
        element: <LuminousPanel />,
      },
      {
        path: "/solargenarator",
        element: <SolarGeneratorPanel />,
      },
      {
        path: "/streetlight",
        element: <SolarStreetLightPanel />,
      },
      {
        path: "/lithum",
        element: <LithiumBatteriesPanel />,
      },
      {
        path: "/tubular",
        element: <TubularBatteriesPanel />,
      },
      {
        path: "/solarfan",
        element: <SolarFan />,
      },
      {
        path: "/solarcamera",
        element: <SolarCamera />,
      },
      {
        path: "/projects",
        element: <AllProjects />,
        children: [
          {
            path: "first-display-inverter",
            element: <FirstDisplayInver />,
          },
        ],
      },
    ],
  },
]);


function App() {

   
  return <RouterProvider router={router} />;
}

export default App;
