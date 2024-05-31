

const Partners = () => {
    return (
        <div className="mt-20">
            <div className="text-center pb-3 space-y-1">
                <p className="text-[#618fc5] font-semibold text-xl">Our Partners</p>
                <h1 className="text-3xl font-bold">Meet Our Partners</h1>
            </div>

            <div data-aos="zoom-in-up" data-aos-duration="1200" className=" grid grid-col-1 lg:grid-cols-3 items-center w-3/4 mx-auto">

                <div className="items-center col-span-2 justify-around flex-grow flex flex-col md:flex-row lg:flex-row lg:gap">
                    <img className="h-40 w-40" src="https://i.ibb.co/pr06Cd5/logo-real-estate-home-solutions-that-is-home-solution-527952-33.jpg" alt="" />
                    <img className="h-40 w-40" src="https://i.ibb.co/GnTP71F/crative-real-estate-logo-vector-elegant-modern-hidden-object-negative-space-concept-86032400.jpg" alt="" />
                    <img className="h-40 w-40" src="https://i.ibb.co/Srxcy7K/real-estate-logo-74869-159.jpg" alt="" />
                </div>

                <div className="items-end md:ml-36 lg:ml-0 justify-between flex flex-col md:flex-row lg:flex-row lg:gap">
                    <img className="h-40 w-40" src="https://graphicsfamily.com/wp-content/uploads/2020/04/Logo_01-01-scaled.jpg" alt="" />
                    <img className="h-40 w-40" src="https://i.ibb.co/DWMWqbk/creative-real-estate-house-logo-design-297904-original.jpg" alt="" />
                </div>

            </div>
        </div>
    );
};

export default Partners;