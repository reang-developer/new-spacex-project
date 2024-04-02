import React , { useState }from 'react'

const Sidebar = ({ showMenu }) => {
  return (
    <div >
       { 
                <div className="  w-40  py-20 px-2 space-y-1 sm:px-3 ">
                   
                        <a href="mission.html" className="text-white  hover:underline block px-3 py-2 rounded-md text-base font-medium">MISSION</a>
                        <a href="carrers.html" className="text-white hover:underline block px-3 py-2 rounded-md text-base font-medium">CAREERS</a>
                        <a href="updates.html" className="text-white  hover:underline block px-3 py-2 rounded-md text-base font-medium">UPDATES</a>
                        <a href="shop.html" className="text-white  hover:underline block px-3 py-2 rounded-md text-base font-medium">SHOP</a>
                        <a href="launches.html" className="text-white  hover:underline block px-3 py-2 rounded-md text-base font-medium">LAUNCHES</a>
                
                </div>
            }
    </div>
  )
}

export default Sidebar
