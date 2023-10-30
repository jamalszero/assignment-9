import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const Details = () => {
    const [service, setService] = useState({});
    const { id } = useParams();
    const services = useLoaderData();
    const { title, image, price, long_description } = service;

    useEffect(() => {
        setService(services.find(item => item.id == id))
    }, [services, id])
    console.log(service);
    return (
        <div className="w-[95%] mx-auto mt-16 ">
            <div className="card bg-base-100 border w-4/5 lg:w-1/2 mx-auto">
                <figure><img className="h-64 w-full" src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p className="my-4">{long_description}</p>
                    <div className="card-actions flex-col  items-center">
                        <p className="font-bold text-lg text-[#DE1A22] border rounded-md max-w-max py-2 px-1">Price : {price} ৳</p>
                        <button className="btn border-none w-full text-white text-lg bg-[#DE1A22] mt-4">Order</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;