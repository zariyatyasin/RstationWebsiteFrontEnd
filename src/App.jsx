import { useSelector } from "react-redux";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";
import { Footer } from "./Components/Footer/Footer";
import { Navbar } from "./Components/Navbar/Navbar";

import Home from "./Pages/Home/Home";
import { Login } from "./Pages/Login/Login";
import Products from "./Pages/Products/Products";
import Register from "./Pages/Register/Register";

import SingleProduct from "./Pages/SingleProduct/SingleProduct";

const ToHomePage = ({ children }) => {
  const { currentUser } = useSelector((state) => state.LoginInUser);
  if (currentUser) {
    return <Navigate to={"/"} />;
  }
  return children;
};

const Layout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products/:id",
        element: <Products />,
      },
      {
        path: "/product/:id",
        element: <SingleProduct />,
      },
      {
        path: "/login",
        element: (
          <ToHomePage>
            <Login />,
          </ToHomePage>
        ),
      },
      {
        path: "/register",
        element: (
          <ToHomePage>
            <Register />,
          </ToHomePage>
        ),
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
