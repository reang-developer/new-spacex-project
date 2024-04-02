import React ,{useState} from 'react'
import Navbar from './Navbar';
import body from '../assets/Images/body.jpeg';
import Sidebar from './Sidebar';


const Body = () => {

        const [showMenu, setShowMenu] = useState(false);
    
        const toggleMenu = () => {
            setShowMenu(!showMenu);
        };
    return (
        <div className="relative">
            {/* Background image */}
            <img src={body} alt="Background" className="absolute inset-0 w-full h-full object-cover style={{ filter: 'brightness(120%)' }}" />
            {/* Overlay for the image */}
            {showMenu&&  (
                 <div className="absolute h-full  w-60 right-0 bg-gray-900" >
                 <Sidebar showMenu={showMenu} />
                 </div>

            )

            }
           
            
            <div className="absolute inset-0 bg-gray-900 opacity-50 "></div>
            {/* Navbar */}
            <Navbar  showMenu={showMenu} setShowMenu={setShowMenu} toggleMenu={toggleMenu} />
            
        
            {/* Content */}
            <div className="min-h-screen flex justify-center items-center relative">
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
