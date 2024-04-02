import logo from '../assets/Images/logo.png';
import { Menu, X } from 'lucide-react';
import React, { useState } from 'react';
import Logos from './Logos';
import Sidebar from './Sidebar';



const Navbar = ({showMenu,setShowMenu,toggleMenu}) => {
    
    return (
        // bg-gray-900 border-b
        <nav className="  border-gray-900 sticky top-0 z-50">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                    <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start" >
                        {/* <!-- Logo --> */}
                        <a className="flex flex-shrink-0 items-center mr-0" href="/index.html">
                        <Logos/>
                        {/* <img className="h-10 w-auto" src={logo} alt="Spacex Project " /> */}
                        </a>

                        {/* Middle */}

                        <div className="hidden md:block">
                            <div className="ml-50 flex items-baseline space-x-4">
                                <a href="/falcon.html" className="text-gray-200  hover:underline rounded-md px-3 py-2 text-sm font-medium">
                                    FALCON9</a>
                                <a href="/falcon-heavy.html" className="text-gray-200  hover:underline rounded-md px-3 py-2 text-sm font-medium flex-shrink-0">
                                    FALCON HEAVY</a>
                                <a href="/dragon.html" className="text-gray-200  hover:underline rounded-md px-3 py-2 text-sm font-medium">
                                    DRAGON</a>
                                <a href="/starship.html" className="text-gray-200  hover:underline rounded-md px-3 py-2 text-sm font-medium ">
                                    STARSHIP</a>
                                <a href="/humanspacelight.html" className="text-gray-200  hover:underline rounded-md px-3 py-2 text-sm font-medium flex-shrink-0">
                                    HUMAN SPACELIGHT</a>
                                <a href="/rideshare.html" className="text-gray-200  hover:underline rounded-md px-3 py-2 text-sm font-medium">
                                    RIDESHARE</a>
                                <a href="/starsheild.html" className="text-gray-200  hover:underline rounded-md px-3 py-2 text-sm font-medium">
                                    STARSHIELD</a>
                                <a href="/starlink.html" className="text-gray-200 hover:underline rounded-md px-3 py-2 text-sm font-medium">
                                    STARLINK</a>
                            </div>
                        </div>

                        {/* Right */}

                        <div className="hidden md:block">
                            <div className="ml-80 flex items-baseline space-x-4">
                                <a href="/shop.html" className="text-gray-200  hover:underline rounded-md  py-2 text-sm font-medium">
                                    SHOP</a>

                                    <button className="text-white px-3 py-2 focus:outline-none" onClick={toggleMenu}>
                                    {showMenu ? <X size={24} /> : <Menu size={24} />}
                                </button>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>



        </nav>
    );
}

export default Navbar

