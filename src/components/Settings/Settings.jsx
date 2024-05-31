import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Banner from "../Banner/Banner";

const Settings = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => notify("Logged out successfully..!"))
            .catch();
    }

    useEffect(() => {
        document.title = 'Settings';
    }, []);

    return (
        <div className="space-y-5 lg:space-y-0 ">
            <div className="lg:relative ">
                <img className="w-[100%] lg:h-[600px]" src="https://i.ibb.co/ZSpCzh7/photo-1605276373954-0c4a0dac5b12-q-80-w-2070-auto-format-fit-crop-ixlib-rb-4-0.jpg" alt="" />
            </div>

            <div className="animate__animated animate__backInDown lg:absolute lg:top-24 lg:right-28 z-[1]">
                <div className=' py-8 mb-12  rounded-3xl text-center mx-auto lg:mx-3 w-[80%] lg:w-[440px] lg:h-[550px] bg-blue-950'>

                    <div className="avatar mb-10">
                        <div className="w-52 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={user.photoURL} />
                        </div>
                    </div>

                    <h1 className='text-[#D9AAFF] text-4xl font-bold'>{user.displayName}</h1>
                    <p className='text-[#AEA1BD] pt-4 '>UID : {user.uid}</p>
                    <p className='text-[#AEA1BD] py-1 text-lg font-bold'>{user.email}</p>
                    <h3 className='text-white'>Registered : {user.metadata.creationTime}</h3>

                    <div className="pt-6 space-x-5">
                        <Link to='/update' className="btn btn-success text-white">Update Profile</Link>
                        <button onClick={handleLogOut} className="btn btn-accent">Logout</button>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Settings;