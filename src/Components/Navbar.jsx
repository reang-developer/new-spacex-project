import logo from '../assets/Images/logo.png';
import { Menu, X } from 'lucide-react';
import React, { useState } from 'react';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };
    return (
        <nav className="bg-gray-900 border-b border-gray-900 sticky top-0 z-50">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                    <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start" >
                        {/* <!-- Logo --> */}
                        <a className="flex flex-shrink-0 items-center mr-0" href="/index.html">
                            <img className="h-10 w-auto" src={logo} alt="Spacex Project " />
                        </a>

                        {/* Middle */}

                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <a href="/falcon.html" className="text-gray-200  hover:underline rounded-md px-3 py-2 text-sm font-medium">
                                    FALCON9</a>
                                <a href="/falcon-heavy.html" className="text-gray-200  hover:underline rounded-md px-3 py-2 text-sm font-medium">
                                    FALCON Heavy</a>
                                <a href="/dragon.html" className="text-gray-200  hover:underline rounded-md px-3 py-2 text-sm font-medium">
                                    DRAGON</a>
                                <a href="/starship.html" className="text-gray-200  hover:underline rounded-md px-3 py-2 text-sm font-medium ">
                                    STARSHIP</a>
                                <a href="/humanspacelight.html" className="text-gray-200  hover:underline rounded-md px-3 py-2 text-sm font-medium">
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
                                <a href="/shop.html" className="text-gray-200  hover:underline rounded-md px-3 py-2 text-sm font-medium">
                                    SHOP</a>

                                    <button className="text-white px-3 py-2 focus:outline-none" onClick={toggleMenu}>
                                    {showMenu ? <X size={24} /> : <Menu size={24} />}
                                </button>
                            </div>
                        </div>


                    </div>
                </div>
            </div>

            {showMenu && (
                <div className="md:hidden bg-gray-900">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a href="mission.html" className="text-white  hover:underline block px-3 py-2 rounded-md text-base font-medium">MISSION</a>
                        <a href="carrers.html" className="text-white-200  hover:underline block px-3 py-2 rounded-md text-base font-medium">CAREERS</a>
                        <a href="updates.html" className="text-gray-300  hover:underline block px-3 py-2 rounded-md text-base font-medium">UPDATES</a>
                        <a href="shop.html" className="text-gray-300  hover:underline block px-3 py-2 rounded-md text-base font-medium">SHOP</a>
                        <a href="launches.html" className="text-gray-300  hover:underline block px-3 py-2 rounded-md text-base font-medium">LAUNCHES</a>
                    </div>
                </div>
            )}


        </nav>
    );
}

export default Navbar

