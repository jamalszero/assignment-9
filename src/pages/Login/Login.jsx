import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="w-[95%] mx-auto  flex justify-center items-center">


            <div className="hero-content w-full flex-col">
                <h2 className="text-3xl">Login</h2>

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 border ">
                    <form className="card-body">
                        
                       
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <Link to="/register" href="#" className="label-text-alt link link-hover block mx-auto text-lg mt-5 text-violet-800 underline">Register</Link>
                            </label>
                        </div>
                        <div className="form-control">
                            <button type="submit" className="btn bg-[#F23534] text-white">Login</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Login;