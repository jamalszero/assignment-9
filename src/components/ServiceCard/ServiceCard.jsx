import { Link } from "react-router-dom";

const ServiceCard = ({ item }) => {
    const { id, title, image, short_description } = item;
    return (
        <div>
            <div className="card card-compact bg-base-100 border rounded-lg h-96">
                <figure><img className="w-full h-full" src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p className="my-3 text-lg">{short_description}</p>
                    <div className="card-actions justify-center items-center">
                        <Link to={`/details/${id}`} className="px-5 rounded-md bg-[#F23534] py-3 text-white">Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;