import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import Order from "../pages/Order/Order";
import Cart from "../pages/Cart/Cart";
import About from "../pages/About/About";

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
                element: <Order></Order>
            },
            {
                path: "/cart",
                element: <Cart></Cart>
            },
            {
                path: "/about",
                element: <About></About>
            }
        ]
    }
]);

export default router;