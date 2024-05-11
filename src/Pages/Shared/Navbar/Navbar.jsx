import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import UseAuth from '../../../Hook/UseAuth';
import profileAvater from '../../../assets/profileAvater.jpg'

const Navbar = () => {
    const { user, logOut } = UseAuth();

    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/queries'>Queries</NavLink></li>
        {user?.email ?
            <>
                <li><NavLink to='/queries'>Recommendations For Me</NavLink></li>
                <li><NavLink to='/myqueries'>My Queries</NavLink></li>
                <li><NavLink to='/myqueries'>My recommendations</NavLink></li>
            </>
            : ""
        }
    </>

    return (
        <div className="navMenu py-2">
            <div className="w-full lg:w-5/6 xl:w-10/12 mx-auto navbar ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content gap-5 mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <NavLink className="btn btn-ghost text-xl uppercase Sitelogo">
                        {/* <img src={sitelogo} className="w-28" alt="" /> */}
                        <h2 className="text-3xl font-Jost">Gadgets Stock</h2>
                    </NavLink>
                </div>
                <div className="navbar-end z-[1000] font-Roboto">
                    <ul className="menu menu-horizontal px-1 gap-5 felx ">
                        {links}
                    </ul>

                    {/* <div className="pr-4">
                        <label className="cursor-pointer grid place-items-center ">
                            <input
                                // onChange={handleToggle}
                                type="checkbox"
                                data-tooltip-id="my-tooltip"
                                data-tooltip-content="Dakr/Light Mood"
                                className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
                            <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                            <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                        </label>
                    </div> */}

                    {user?.email ?
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img
                                        referrerPolicy='no-referrer'
                                        alt="" src={user?.photoURL || profileAvater} />

                                </div>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li><p className="text-lg font-bold capitalize">{user?.displayName || 'Name Not Found'}</p></li>
                                <li><a>Profile</a></li>
                                <li><button onClick={logOut}><a>Logout</a></button></li>
                            </ul>
                        </div>
                        :
                        <div className="px-1 gap-5 felx font-Roboto">
                            <Link className="" to="/login">Login</Link>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;
