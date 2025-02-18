import MainLayout from "@layouts/MainLayout/MainLayout";
import AboutUs from "@pages/AboutUs";
import Categories from "@pages/Categories";
import Home from "@pages/Home";
import Login from "@pages/Login";
import Products from "@pages/Products";
import Register from "@pages/Register";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "categories",
        element: <Categories />,
      },
      {
        path: "categories/products/:prefix",
        element: <Products />,
        loader: ({params}) => {
          if(typeof params.prefix !== "string" || !/^[a-z]+$/i.test(params.prefix)){
            throw new Response("bad request",{
              statusText:"Category not found",
              status:404
            })
          }
          return true;
        }
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);

const AppRoutes = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default AppRoutes;
