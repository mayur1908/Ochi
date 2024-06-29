import React from 'react'

function  Navbar() {
  return (
    <div className='fixed z-[999] w-full h-screen px-20 py-08 font-["Neue Montreal"] flex justify-between items-centre'>
      <div className='logo '>
      <svg width="195" height="80" viewBox="0 0 195 80" fill="none" xmlns="http://www.w3.org/2000/svg">
  <image href="https://smarttechsecure.com/wp-content/uploads/2022/04/Smarttech_Solution_Logo-removebg-preview.png" width="195" height="80"/>
  </svg>     
  </div>
  <div className="links flex gap-10">
    {[" Services ", " Our Works "," about Us "," Insights","contact"].map((item,index)=>
    <a key={index} className={`text-lg capitalize font-light ${index === 4 && "ml-32" }`}>{item}</a>)}
  </div>
    </div>
  )
}

export default Navbar
