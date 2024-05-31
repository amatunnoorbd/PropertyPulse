import { useEffect } from "react";
import { BsTwitter } from "react-icons/bs";
import { FaTelegramPlane, FaFacebookF } from "react-icons/fa";


const Contract = () => {

    useEffect(() => {
        document.title = 'Contract';
    }, []);

    return (
        <div className="bg-cyan-300 flex justify-center py-16 lg:h-[60vh] mx-4 lg:mx-0">

            <div className="animate__animated animate__zoomIn  bg-white px-5 py-14 lg:py-0 lg:px-0 pt-2 text-center lg:w-[800px]  rounded-2xl">

                <h1 className="text-3xl font-semibold py-6"> Office Address</h1>
                <p className="text-lg leading-7">
                    Level-8, 22, Sunrise Tower, Gulshan, Dhaka <br />
                    Support: support@fakecompany.com <br />
                    Helpline: 01712345678 <br />
                    (Available : Mon - Fri, 9:00 AM to 6:00 PM)
                </p>

                <div className="mt-6  flex text-3xl gap-6 justify-center">
                    <FaFacebookF /> <BsTwitter /><FaTelegramPlane />
                </div>

            </div>
        </div>
    );
};

export default Contract;