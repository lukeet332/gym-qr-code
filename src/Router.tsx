import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./Pages/Home/Home";
import { Admin } from "./Pages/Admin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/admin/:code/:name",
    element: <Admin />,
  },
]);

export const Router = () => <RouterProvider router={router} />;
