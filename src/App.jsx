import { useEffect } from "react";
import { NavPage, HomePage, AboutPage, ContactPage, CataloguePage } from "./pages";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
    ],
  },
]);

function App() {

   
  return <RouterProvider router={router} />;
}

export default App;
