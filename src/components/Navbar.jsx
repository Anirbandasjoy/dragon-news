import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import profileImage from '../assets/user.png'
import { useContext } from 'react'
import { authContext } from '../context/AuthProvider'
import Swal from 'sweetalert2'

const Navbar = () => {
    const navigate = useNavigate()
    const { user, logOutUser } = useContext(authContext);

    const handleLogOut = () => {
        logOutUser()
            .then(() => {
                Swal.fire(
                    '😒☑️😒',
                    'log out successfully',
                    'success'
                )
                navigate("/login")
            })
            .catch((err) => console.log(err.message))
    }

    const navItems = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/carrer">Carrer</NavLink></li>

    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm  dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            navItems
                        }
                    </ul>
                </div>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end flex items-center ">
                <div className="dropdown dropdown-end mr-2 mt-2 ">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-11  rounded-full">
                            {
                                user ? <img src={user?.photoURL} /> : <img src={profileImage} />
                            }
                        </div>
                    </label>
                    {
                        user && <ul tabIndex={0} className="mt-3   z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-300 rounded-box w-52">
                            {
                                user && <>
                                    <li>
                                        <Link to="/profile" className="justify-between">
                                            Profile
                                            <span className="badge">New</span>
                                        </Link>
                                    </li>
                                    <li><Link to="/settings">Settings</Link></li>
                                </>
                            }
                        </ul>
                    }
                </div>
                {
                    user ? <Link onClick={handleLogOut} className="btn capitalize bg-gray-700 text-white sm:rounded-none w-14 rounded-md   sm:w-24  hover:bg-gray-700">Logout</Link> : <Link to="/login" className="btn capitalize bg-gray-700 text-white sm:rounded-none w-14 rounded-md   sm:w-24  hover:bg-gray-700">Login</Link>
                }
            </div>
        </div>
    )
}

export default Navbar