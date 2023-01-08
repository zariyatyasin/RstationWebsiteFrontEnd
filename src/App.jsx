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
import CheckOutPage from "./Pages/CheckOutPage/CheckOutPage";
import SingleProduct from "./Pages/SingleProduct/SingleProduct";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MobileNav from "./Components/MobileMenu/MobileNav";
import ProfileUpdate from "./Pages/Dashboard/DashBoardList/ProfileUpdate";

const ToHomePage = ({ children }) => {
  const { currentUser } = useSelector((state) => state.LoginInUser);
  if (currentUser) {
    return <Navigate to={"/"} />;
  }
  return children;
};
const ToLogin = ({ children }) => {
  const { currentUser } = useSelector((state) => state.LoginInUser);
  if (!currentUser) {
    return <Navigate to={"/login"} />;
  }
  return children;
};

const Layout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet />

      <div className="md:hidden">
        <MobileNav></MobileNav>
      </div>
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
      {
        path: "/checkout",

        element: (
          <ToLogin>
            <CheckOutPage />
          </ToLogin>
        ),
      },
      {
        path: "/profile/:id",
        element: (
          <ToLogin>
            <Dashboard />
          </ToLogin>
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
