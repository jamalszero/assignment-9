import Marquee from "react-fast-marquee";
const OurClients = () => {
    return (
        <div className="mb-11">
            <h2 className="text-4xl text-center text-[#F23534] border max-w-max mx-auto p-3 font-medium mb-8">Our Clients</h2>
            <Marquee speed={100} className="">
                <img className="w-28 h-24 mx-20" src="https://i.ibb.co/HHmBSwL/iau-logo.png" alt="" />
                <img className="w-24 h-24 mx-20" src="https://i.ibb.co/ThYbCVt/national-university-of-bangladesh-logo-105-B0-CD1-FD-seeklogo-com.png" alt="" />
                <img className="w-24 h-24 mx-20" src="https://i.ibb.co/MM4D7VC/png-transparent-curzon-hall-national-university-bangladesh-faculty-of-fine-arts-university-of-dhaka.png" alt="" />
            </Marquee>
        </div>
    );
};

export default OurClients;