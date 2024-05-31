import { NavLink, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from "react";
import { updateProfile } from 'firebase/auth';
import { AiOutlineEye } from "react-icons/ai";
import { FaRegEyeSlash } from "react-icons/fa";
import { AuthContext } from '../../AuthProvider/AuthProvider';
import swal from 'sweetalert';

const Register = () => {

    useEffect(() => {
        document.title = 'Register';
    }, []);

    const navigate = useNavigate();
    const { createNewUser, setUser } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);

    const handleRegisterWithEmail = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const name = e.target.name.value;
        const photoUrl = e.target.photo.value;

        if (password.length < 6) {
            swal({
                title: "Password should be at least 6 characters..!",
                icon: "warning",
                timer: 2500,
            });
            return;
        }
        else if (!/[A-Z]/.test(password)) {
           swal({
                title: "Your password should have at least one uppercase character..!",
                icon: "warning",
                timer: 2500,
            });
            return;
        }

        else if (!/[a-z]/.test(password)) {
           swal({
                title: "Your password should have at least one Lowercase character..!",
                icon: "warning",
                timer: 2500,
            });
            return;
        }

        createNewUser(email, password)
            .then((result) => {
                const user = result.user;
                // update profile
                updateProfile(user, {
                    displayName: name,
                    photoURL: photoUrl
                })
                setUser(user);

                swal({
                    title: "Registration Successfull..!",
                    icon: "success",
                    timer: 2000,
                });

                setTimeout(() => {
                    navigate('/');
                }, 2000);

            })

            .catch(error => {
                swal({
                    title: error.message,
                    icon: "error",
                    timer: 2500,
                });
            })
    }

    return (
        <div className='bg-[#c2d0d9] w-full h-[90vh] py-20'>

            <div className="animate__animated animate__zoomIn mx-auto w-[400px] h-[500px] bg-white rounded-3xl px-12">

                <h1 className='text-center text-2xl font-bold py-7'>Register Now!</h1>

                <form onSubmit={handleRegisterWithEmail}>
                    <p className='pb-1'>Your Name</p>
                    <input className='p-2 mb-2 border rounded-md w-full border-red-600' type="text" name='name' placeholder='Enter Your Name' required />

                    <p className='pb-1'>Photo URL</p>
                    <input className='p-2 mb-2 border rounded-md w-full border-red-600' type="text" name='photo' placeholder='Enter Photo URL' required />

                    <p className='pb-1'>Email Address</p>
                    <input className='p-2 mb-2 border rounded-md w-full border-red-600' type="email" name='email' placeholder='Enter Your email' required />

                    <p className='pb-1'>Password</p>
                    <div className="flex flex-col relative">
                        <input
                            className='p-2 border rounded-md w-full border-red-600'
                            type={showPassword ? "text" : "password"}
                            name="password" id="password"
                            placeholder='Enter your Passoword' required />
                        <span onClick={() => setShowPassword(!showPassword)} className="absolute left-[270px] top-2 text-xl">
                            {
                                showPassword ? <FaRegEyeSlash /> : <AiOutlineEye />
                            }
                        </span>
                    </div>

                    <button className='font-bold text-white w-full mt-5 p-2 rounded-md border bg-[#1c67bc]'>
                        Register
                    </button>
                </form>

                <h1 className='text-center py-5'>Do not have an accout? <NavLink to="/login" className='text-[16px] font-bold'>Login</NavLink></h1>

            </div>
        </div>
    );
};

export default Register;