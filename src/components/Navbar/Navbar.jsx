import { Link, NavLink } from "react-router-dom";
import "../Navbar/Navbar.css"

const Navbar = () => {
    return (
        <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row justify-between items-center w-[95%]  mx-auto">
                <div>
                    <h2 className="font-philosopher text-4xl text-[#DE1A22]">EduVent</h2>
                </div>
                <div className="flex flex-wrap lg:flex-nowrap justify-center list-none font-rajdhani">
                    <NavLink to="/" className="px-5 py-2 lg:py-4 lg:border-r lg:border-l hover:bg-[#F23534] hover:text-white">Home</NavLink>
                    <NavLink to="/about" className="px-5 py-2 lg:py-4 lg:border-r hover:bg-[#F23534] hover:text-white">About</NavLink>
                    <NavLink to="/order" className="px-5 py-2 lg:py-4 lg:border-r hover:bg-[#F23534] hover:text-white">Order</NavLink>
                    <NavLink to="/cart" className="px-5 py-2 lg:py-4 lg:border-r hover:bg-[#F23534] hover:text-white">Cart</NavLink>
                    <NavLink to="/register" className="px-5 py-2 lg:py-4 lg:border-r hover:bg-[#F23534] hover:text-white">Register</NavLink>
                    <NavLink to="/login" className="px-5 py-2 lg:py-4 lg:border-r hover:bg-[#F23534] hover:text-white">Login</NavLink>

                </div>
                <div className="flex flex-col lg:flex-row items-center font-rajdhani my-3 lg:my-0">
                    <img src="/Jamal.jpg" className="w-10 h-10 rounded-full" />
                    <p className="mx-3">jamalsherpur@gmail.com</p>

                    <Link className="px-5 py-2 bg-[#F23534] text-white  font-medium rounded hover:bg-[#F23534] hover:text-white">Logout</Link>

                </div>
            </div>
        </div>
    );
};

export default Navbar;