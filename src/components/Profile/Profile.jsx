import { useContext, useEffect } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';


const Profile = () => {

    const { user } = useContext(AuthContext);

    useEffect(() => {
        document.title = 'Profile';
    }, []);

    return (
        <div className='bg-cyan-300 py-20 lg:md:py-0 pb-20 mt-2 flex  justify-center lg:md:h-[550px]'>

            <div className='my-auto animate__animated animate__zoomIn bg-white gap-12 justify-center flex flex-col lg:flex-row items-center py-20 lg:py-2 rounded-3xl mx-16 md:lg:mx-3 w-[100%] lg:w-[780px] lg:h-[320px] '>

                <div className=" avatar">
                    <div className="w-52 h-52 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={user.photoURL} />
                    </div>
                </div>

                <div>
                    <h1 className='text-4xl font-bold'>{user.displayName}</h1>
                    <p className=' pt-4 '>UID : {user.uid}</p>
                    <p className=' py-1 text-lg font-bold'>{user.email}</p>
                    <h3 className='text-sm'>Registered : {user.metadata.creationTime}</h3>
                </div>

            </div>

        </div>
    );
};

export default Profile;