import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";


const Root = () => {
    return (
        <div className="font-rajdhani">
            <nav className="mx-auto border-b lg:sticky top-0 z-10 bg-base-100 shadow-md mb-10">
                <Navbar></Navbar>
            </nav>

    
            <div className="container mx-auto ">
                <Outlet></Outlet>
            </div>

            <Footer></Footer>

         
            

        </div>
    );
};

export default Root;