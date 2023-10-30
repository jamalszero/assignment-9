import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import Order from "../pages/Order/Order";
import PaymentHistory from "../pages/PaymentHistory/PaymentHistory";

import Details from "../components/Details/Details";
import PrivateRouteForDetails from "./PrivateRouteForDetails/PrivateRouteForDetails";
import PrivateRouteForPaymentHistory from "./PrivateRouteForPaymentHistory/PrivateRouteForPaymentHistory";
import PrivateRouteForOrder from "./PrivateRouteForOrder/PrivateRouteForOrder";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                loader: () => fetch("/data.json"),
                element: <Home></Home>
                
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/order",
                element: <PrivateRouteForOrder><Order></Order></PrivateRouteForOrder>
            },
            {
                path: "/payment-history",
                element: <PrivateRouteForPaymentHistory><PaymentHistory></PaymentHistory></PrivateRouteForPaymentHistory>
            },
            
            {
                path: "/details/:id",
                element: <PrivateRouteForDetails><Details></Details></PrivateRouteForDetails>,
                loader: () => fetch('/data.json')
            }
        ]
    }
]);

export default router;