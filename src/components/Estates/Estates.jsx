import { useLoaderData } from "react-router-dom";
import Card from "../Card/Card";

const Estates = () => {

    const houses = useLoaderData();
    console.log(houses);

    return (
        <div className="py-20 lg:w-[1250px] mx-5 lg:mx-auto">
            <div className="text-center space-y-1 mb-10">
                <h1 className="text-4xl font-bold">Explore Our Properties</h1>
                <p className="text-base">Explore our diverse portfolio of properties, ranging from urban apartments <br /> to serene countryside estates.</p>
            </div>

            <div className="md:gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:ml-7 gap-y-7">
                {
                    houses.map(house => <Card
                        key={house.id}
                        data={house}
                    ></Card>)
                }
            </div>
        </div>
    );
};

export default Estates;