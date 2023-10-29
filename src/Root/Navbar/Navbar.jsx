import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row justify-between items-center w-[95%]  mx-auto">
                <div>
                    <h2  className="font-philosopher text-4xl text-[#DE1A22]">EduVent</h2>
                </div>
                <div className="flex flex-wrap lg:flex-nowrap justify-center list-none font-rajdhani">
                    <NavLink className="px-5 py-2 lg:py-4 lg:border-r lg:border-l hover:bg-[#F23534] hover:text-white">Home</NavLink>
                    <NavLink className="px-5 py-2 lg:py-4 lg:border-r hover:bg-[#F23534] hover:text-white">About</NavLink>
                    <NavLink className="px-5 py-2 lg:py-4 lg:border-r hover:bg-[#F23534] hover:text-white">Order</NavLink>
                    <NavLink className="px-5 py-2 lg:py-4 lg:border-r hover:bg-[#F23534] hover:text-white">Cart</NavLink>
                    <NavLink className="px-5 py-2 lg:py-4 lg:border-r hover:bg-[#F23534] hover:text-white">Register</NavLink>
                    <NavLink className="px-5 py-2 lg:py-4 lg:border-r hover:bg-[#F23534] hover:text-white">Login</NavLink>
                    
                </div>
                <div className="flex flex-col lg:flex-row items-center font-rajdhani my-3 lg:my-0">
                <img src="/Jamal.jpg" className="w-10 h-10 rounded-full"/>
                    <p className="mx-3">jamalsherpur@gmail.com</p>
                   
                    <NavLink className="px-5 py-2 bg-[#F23534] text-white  font-medium rounded hover:bg-[#F23534] hover:text-white">Logout</NavLink>
                    
                </div>
            </div>
        </div>
    );
};

export default Navbar;