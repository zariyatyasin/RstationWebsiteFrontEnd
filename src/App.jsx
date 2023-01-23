import { useSelector } from "react-redux";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";

import { Navbar } from "./Components/Navbar/Navbar";

import Home from "./Pages/Home/Home";
import { Login } from "./Pages/Login/Login";
import Products from "./Pages/Products/Products";
import Register from "./Pages/Register/Register";
import CheckOutPage from "./Pages/CheckOutPage/CheckOutPage";
import SingleProduct from "./Pages/SingleProduct/SingleProduct";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MobileNav from "./Components/MobileMenu/MobileNav";

import AdminDashboard from "./AdminDashboard/AdminDashBoard/AdminDashboard";
import AdminUserList from "./AdminDashboard/userList/AdminUserList";
import DashboardSidebar from "./Components/DashboardSidebar/DashboardSidebar";
import AdminProductList from "./AdminDashboard/AdminProductsList/AdminProductList";
import UploadProduct from "./AdminDashboard/AdminProductUpload/UploadProduct";

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

const AdminAccess = ({ children }) => {
  const { currentUser } = useSelector((state) => state.LoginInUser);

  if (currentUser && !currentUser.isAdmin) {
    return <Navigate to={"/"} />;
  }
  return children;
};
const SidebarLayout = () => {
  const { OpenSidebar } = useSelector((state) => state.GlobalState);
  return (
    <div>
      <DashboardSidebar></DashboardSidebar>
      <div
        className={`${
          OpenSidebar ? "md:ml-64" : "md:ml-0"
        } p-2     md:p-6  mt-16`}
      >
        <Outlet />
      </div>
    </div>
  );
};

const Layout = () => {
  return (
    <div>
      <Navbar></Navbar>``
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
        path: "/profile/:link",
        element: (
          <ToLogin>
            <Dashboard />
          </ToLogin>
        ),
      },
    ],
  },
  //Admin
  {
    path: "/",
    element: <SidebarLayout />,
    children: [
      {
        path: "/admin/dashboard",
        element: (
          <ToLogin>
            <AdminAccess>
              <AdminDashboard />
            </AdminAccess>
          </ToLogin>
        ),
      },
      {
        path: "/admin/customers",
        element: (
          <ToLogin>
            <AdminAccess>
              <AdminUserList />
            </AdminAccess>
          </ToLogin>
        ),
      },
      {
        path: "/admin/product",
        element: (
          <ToLogin>
            <AdminAccess>
              <AdminProductList />
            </AdminAccess>
          </ToLogin>
        ),
      },
      {
        path: "/admin/uploadproduct",
        element: (
          <ToLogin>
            <AdminAccess>
              <UploadProduct />
            </AdminAccess>
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
