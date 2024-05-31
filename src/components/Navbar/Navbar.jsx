import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import swal from 'sweetalert';


const Navbar = () => {

    const { user, logOut} = useContext(AuthContext);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    console.log(user);


    const handleLogOut = () => {
        logOut()
            .then(() => {
                swal({
                    title: "Logout Successfull..!",
                    icon: "success",
                    timer: 2000,
                });
            })
            .catch();
    }

    const handleDropdownToggle = () => {
        setIsDropdownOpen((prevState) => !prevState);
    };

    const closeDropdown = () => {
        setIsDropdownOpen(false);
    };

    const links = <>
        <li><NavLink to="/" onClick={closeDropdown}>Home</NavLink></li>
        <li><NavLink to="/about" onClick={closeDropdown}>About</NavLink></li>
        <li><NavLink to="/contract" onClick={closeDropdown}>Contract</NavLink></li>
        {
            user &&
            <>
                <li><NavLink to="/profile" onClick={closeDropdown}>Profile</NavLink></li>
                <li><NavLink to="/update" onClick={closeDropdown}>Update Profile</NavLink></li>
                <li><NavLink to="/settings" onClick={closeDropdown}>Settings</NavLink></li>
            </>
        }
    </>

    return (
        <div data-aos="fade-up" className="navbar lg:px-28 shadow-xl nav-border">
            <div className="navbar-start">
                <div className="dropdown">
                    <div onClick={handleDropdownToggle} tabIndex={0} role="button" className="btn btn-ghost lg:hidden" >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>

                    {
                        isDropdownOpen && (
                            <ul tabIndex={0} className="text-white menu menu-sm dropdown-content mt-3 z-[2] p-2 shadow bg-slate-700 rounded-box w-52">
                                {links}
                            </ul>
                        )
                    }

                </div>
                <Link to='/' className="flex gap-2" onClick={closeDropdown}>
                    <img className="w-12 rounded-md hidden lg:block" src="https://i.ibb.co/4YVjT4R/letter-r-circle-logo-vector-34012012.jpg" alt="" />
                    <h1 className="text-lg lg:text-3xl font-bold">PropertyPulse</h1>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex ">
                <ul className="menu menu-horizontal px-1 ">

                    {links}

                </ul>
            </div>
            <div className="navbar-end space-x-5">

                {
                    user ?
                        <>
                            <Link to='/profile' className="avatar" onClick={closeDropdown}>
                                <div className="cursor-pointer w-10 lg:w-12 rounded-full ring ring-blue-400">
                                    <img src={user.photoURL} title={user.displayName} />
                                </div>
                            </Link>
                            <button onClick={handleLogOut} className="mr-3 lg:mr-0 lg:text-lg font-bold px-3 lg:px-4 py-2 rounded-xl bg-blue-900 text-white ">Logout</button>
                        </> :
                        <NavLink to='/login' onClick={closeDropdown}>
                            <button className="mr-3 lg:mr-0 lg:text-lg font-bold px-3 lg:px-4 py-2 rounded-xl bg-blue-900 text-white ">Login</button>
                        </NavLink>
                }

            </div>
        </div>
    );
};

export default Navbar;