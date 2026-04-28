import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./pages/home/Home.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./pages/errors/NotFound.jsx";
import Start from "./pages/start/Start.jsx";
import FeaturesPage from "./pages/features/FeaturesPage.jsx";
import Support from "./pages/support/Support.jsx";
import DealsPage from "./pages/deals/DealsPage.jsx";
import TascoderApp from "./pages/tascoderApp/tascoderApp.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <NotFound></NotFound>,
  },
  {
    path: "/startNow",
    element: <Start></Start>,
    errorElement: <NotFound></NotFound>,
  },
  {
    path: "/features",
    element: <FeaturesPage></FeaturesPage>,
    errorElement: <NotFound></NotFound>,
  },
  {
    path: "/support",
    element: <Support></Support>,
    errorElement: <NotFound></NotFound>,
  },
  {
    path: "/deals",
    element: <DealsPage></DealsPage>,
    errorElement: <NotFound></NotFound>,
  },
  {
    path: "/tascoderApp",
    element: <TascoderApp></TascoderApp>,
    errorElement: <NotFound></NotFound>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
