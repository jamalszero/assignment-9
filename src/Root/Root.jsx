import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";

const Root = () => {
    return (
        <div>
            <nav className=" mx-auto border-b">
                <Navbar></Navbar>
            </nav>
            <div className="container mx-auto">
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default Root;