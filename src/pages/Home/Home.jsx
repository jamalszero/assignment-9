import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import Card from "../../components/Card/Card";
import WhyChoseEduVent from "../../components/WhyChoseEduVent/WhyChoseEduVent";
import OurClients from "../../components/OurClients/OurClients";

const Home = () => {
    const data = useLoaderData();

    return (
        <div className="w-[95%] mx-auto">
            <Banner></Banner>

            <div className="mb-14">
                <h2 className="text-4xl text-center text-[#F23534] border max-w-max mx-auto p-3 font-medium mb-8">Our Services</h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                    {
                        data.map(item => <Card key={item.id} item={item}></Card>)
                    }
                </div>
            </div>

            <WhyChoseEduVent></WhyChoseEduVent>

            <OurClients></OurClients>

        </div>
    );
};

export default Home;