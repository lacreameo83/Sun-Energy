import { useEffect } from "react";
import AllProjects from "./component/works/AllProjects";
import { NavPage, HomePage, AboutPage, ContactPage, CataloguePage } from "./pages";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FirstDisplayInver from "./component/inverter/infinit/FirstDisplayInver";

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
