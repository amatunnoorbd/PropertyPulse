import { FiUsers } from "react-icons/fi";
import { VscVerifiedFilled } from "react-icons/vsc";
import { Link } from "react-router-dom";

const ExtraSection = () => {
    return (
        <div className="mt-8 mb-40 bg-base-200 rounded-xl flex flex-col lg:flex-row lg:gap-10 lg:w-[1230px] mx-auto p-5 lg:p-10">

            <div className="md:mx-auto flex flex-col md:flex-row lg:flex-row gap-4 items-center">
                <div className="space-y-4">
                    <img data-aos="flip-left" data-aos-duration="1000" className="rounded-xl md:w-80 lg:w-72 h-80" src="https://i.ibb.co/v1wGVVd/premium-photo-1661409321575-298f9b09d512-q-80-w-2070-auto-format-fit-crop-ixlib-rb-4-0.jpg" alt="" />
                    <img data-aos="flip-up" data-aos-duration="1000" className="rounded-xl w-full md:w-80 lg:w-72 h-80 lg:h-72" src="https://i.ibb.co/K7fkVQQ/photo-1635330408640-de01ea516c22-q-80-w-1887-auto-format-fit-crop-ixlib-rb-4-0.jpg" alt="" />

                </div>

                <div>
                    <img data-aos="flip-right" data-aos-duration="1000" className="rounded-xl w-[400px] h-[400px] md:h-[500px] lg:h-[500px]" src="https://i.ibb.co/hMKbWmj/photo-1502005229762-cf1b2da7c5d6-q-80-w-1887-auto-format-fit-crop-ixlib-rb-4-0.jpg" alt="" />
                </div>
            </div>

            <div data-aos="zoom-in-left" data-aos-duration="3000" className="mx-auto">
                <div className="space-y-1">
                    <h1 className="mt-10 lg:mt-28 text-2xl lg:text-3xl font-bold">We are Offering The Best <br /> Real State Property For All</h1>
                    <p className="text-[#7e8d8d]">Discover our premier real estate offerings, providing <br /> unparalleled properties tailored to your needs, ensuring the <br /> finest living experience for all clients</p>
                </div>

                <div className="mt-14 flex flex-col lg:flex-row gap-10">

                    <div className="flex gap-4">
                        <div className="rounded-xl border-[3.5px] border-[#3A8BEA] p-4">
                            <FiUsers className=" text-4xl text-[#3A8BEA]" />
                        </div>
                        <div className="space-y-1">
                            <h1 className="text-3xl font-bold">55k</h1>
                            <p className="font-bold">Satisfied People</p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="rounded-xl border-[3.5px] border-[#3A8BEA] p-3">
                            <VscVerifiedFilled className=" text-5xl text-[#3A8BEA]" />
                        </div>
                        <div className="space-y-1">
                            <h1 className="text-3xl font-bold">11k</h1>
                            <p className="font-bold">Varified Property</p>
                        </div>
                    </div>

                </div>

                <div className="text-center lg:text-left">
                    <Link to='/contract' className="mt-8 mb-5 lg:mb-0 rounded-none btn bg-[#3A8BEA] text-white">Contract With US</Link>
                </div>

            </div>
        </div>
    );
};

export default ExtraSection;