import React from 'react'
import Navbar from './Navbar';
import body from '../assets/Images/body.png';

const Body = () => {
    return (
        <div>
            <Navbar />
            <div className="bg-gray-900 min-h-screen flex justify-center items-center relative">
                {/* Overlay for the image */}
                <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
                {/* Background image */}
                <img src={body} alt="Background" className="absolute inset-0 w-full h-full object-cover" />
                {/* Text overlay */}
                <div className="absolute bottom-20 left-10 p-6 text-white">
                    <p className="text-lg">Upcoming Launch</p>
                    <h1 className="text-5xl font-bold">STARLINK MISSION</h1>
                    <button className="mt-2 px-4 py-2 bg-gray-900 text-white hover:bg-sky-500 hover:text-black text-2xl rounded-md">WATCH</button>
                </div>
            </div>
        </div>
    );
}


export default Body
