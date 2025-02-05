import {
  createBrowserRouter,
  replace,
  RouterProvider,
  useLocation,
} from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Menu/Order/Order";
import Login from "../Pages/LoginPage/Login";
import Signin from "../Pages/SignInPage/Signin";
import Secret from "../SheadComponent/Secret/Secret";
import PrivatedRouted from "./PrivatedRoutes/PrivatedRouted";
import Dashbord from "../Pages/Home/TESTIMONIALS/Layout/Dashbord";
import Cart from "../Pages/Dashbord/Cart/Cart";
import { AiFillUsb } from "react-icons/ai";
import Alluser from "../Component/AllUsers/Alluser";
import AddItems from "../Pages/Dashbord/AddItems";
import AdminRouter from "./PrivatedRoutes/AdminRouter";
import ManageItems from "../Pages/Home/TESTIMONIALS/Layout/ManageItems";
import Edited from "../Pages/Dashbord/Edited";
import Payment from "../Pages/Dashbord/Payment/Payment";
import Apartment from "../Pages/Apartment/Apartment";
import MyProfile from "../Pages/Home/TESTIMONIALS/Layout/MyProfile";
import AdminProfile from "../Component/AllUsers/AdminProfile";
import AgrementRequest from "../Component/AgrementRequest";
import MemberProfile from "../Component/MemberProfile";
import Announcements from "../Component/Announcements";
import ManageMembers from "../Component/ManageMembers";
import MakeAnnouncement from "../Component/MakeAnnouncement";
import Cupons from "../Component/Cupons";
import AllCupons from "../Component/AllCupons";
import MakePayment from "../Component/MakePayment";
import ResponsiveSidebar from "../Pages/Home/TESTIMONIALS/Layout/Dashbord";
import BuildingSection from "../Component/About";
import Contact from "../Component/Contact";
import UserPayment from "../Component/UserPayment";
import AboutBuilding from "../Component/AllUsers/AboutSection";
import PaymentHistory from "../Pages/Dashbord/Payment/PaymentHistory";
import MyprofileAll from "../Component/MyprofileAll";
import ErrorPage from "../Component/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "/apartment",
        element: <Apartment></Apartment>,
      },
      {
        path: "/menu",
        element: <Menu></Menu>,
      },

      {
        path: "/order/:category",
        element: <Order></Order>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signin></Signin>,
      },
      {
        path: "/About",
        element: <BuildingSection></BuildingSection>,
      },
      {
        path: "/contactme",
        element: <Contact></Contact>,
      },
      {
        path: "/about",
        element: <AboutBuilding></AboutBuilding>,
      },
      {
        path: "*",
        element: <ErrorPage></ErrorPage>
      },

      {
        path: "/secret",
        element: (
          <PrivatedRouted>
            <Secret></Secret>
          </PrivatedRouted>
        ),
      },
    ],
  },

  {
    path: "dashbord",
    element: (
      <PrivatedRouted>
        <ResponsiveSidebar></ResponsiveSidebar>
      </PrivatedRouted>
    ),
    children: [
      {
        path: "cart",
        element: <Cart></Cart>,
      },

      //admin user onley
      {
        path: "adminprofile",
        element: <AdminProfile></AdminProfile>,
      },
      {
        path: "allusers",
        element: <Alluser></Alluser>,
      },
      {
        path: "additems",
        element: (
          <AdminRouter>
            <AddItems></AddItems>
          </AdminRouter>
        ),
      },
      {
        path: "manageitems",
        element: (
          <AdminRouter>
            <ManageItems></ManageItems>
          </AdminRouter>
        ),
      },
      {
        path: "agrementRequest",
        element: <AgrementRequest></AgrementRequest>,
      },
      {
        path: "payments",
        element: <Payment></Payment>,
      },
      {
        path: "paymenthistory",
        element: <PaymentHistory></PaymentHistory>
      },

      {
        path: `/dashbord/updated/:id`,
        element: (
          <AdminRouter>
            {" "}
            <Edited></Edited>{" "}
          </AdminRouter>
        ),
        loader: ({ params }) =>
          fetch(
            `https://building-management-alpha.vercel.app/menu/${params.id}`
          ),
      },
      {
        path: "myprofile",
        element: <MyProfile></MyProfile>,
      },

      {
        path: "member",
        element: <MemberProfile></MemberProfile>,
      },
      {
        path: "announcement",
        element: <Announcements></Announcements>,
      },
      {
        path: "managemenber",
        element: <ManageMembers></ManageMembers>,
      },
      {
        path: "coupons",
        element: <AllCupons></AllCupons>,
      },

      {
        path: "Announcement/admin",
        element: <MakeAnnouncement></MakeAnnouncement>,
      },
      {
        path: "/dashbord/paymentsuser",
        element: <UserPayment></UserPayment>,
      },
      {
        path: "myprofileall",
        element: <MyprofileAll></MyprofileAll>
      },
    ],
  },
]);

export default router;

// navigate use

//  state({from: location}) replace

// login page
// const location = useLocation()
// const from = location.state.from.pathname
// ...................................................................................
// some site links
// https://edisonrealestatebd.com/
//https://edisonrealestatebd.com/projects/edison-desdemona
