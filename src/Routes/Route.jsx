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


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/apartment',
          element:<Apartment></Apartment>
        },
        {
          path: '/menu',
          element: <Menu></Menu>
        },

        {
          path: '/order/:category',
          element: <Order></Order>
        },
        {
          path: '/login',
          element:<Login></Login>
        },
        {
          path: '/signup',
          element:<Signin></Signin>
        },
        {
          path:'/secret',
          element:<PrivatedRouted>
             <Secret></Secret>
          </PrivatedRouted>
           
        
        }
      ]
    },

    {
      path:"dashbord",
      element:<PrivatedRouted>
        <Dashbord></Dashbord>
      </PrivatedRouted>,
      children:[
        {
          path:'cart',
          element:<Cart></Cart>
        },
        {
          path:`payment`,
          element: <Payment></Payment> 
        },

        //admin user onley
        {
          path:'allusers',
          element:<Alluser></Alluser>
        },
        {
          path:'additems',
          element:<AdminRouter><AddItems></AddItems></AdminRouter>
        },
        {
          path:'manageitems',
          element:<AdminRouter><ManageItems></ManageItems></AdminRouter>
        },
        {
          path:`/dashbord/updated/:id`,
          element:<AdminRouter> <Edited></Edited> </AdminRouter>,
         loader: ({params}) => fetch(`http://localhost:5000/menu/${params.id}`)
        },
        
    ]
    }
  ]);

 export default router





 // navigate use

//  state({from: location}) replace

// login page
// const location = useLocation()
// const from = location.state.from.pathname
// ...................................................................................
// some site links
// https://edisonrealestatebd.com/
//https://edisonrealestatebd.com/projects/edison-desdemona