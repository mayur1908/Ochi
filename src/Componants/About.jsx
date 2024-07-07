import React from 'react'

function About() {
  return (
    <div className='w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black'>
      <h1 className='font-["Neue_Montrial"] text-5xl'>
            SmartTech Secure is a premier provider of fire and security solutions, 
            specializing in the dealership of renowned brands such as Tyco and Honeywell. 
            They offer a comprehensive range of global products, 
            ensuring top-notch safety and security for both public and private sectors.
      </h1>
      <div className="w-full flex gap-5 border-t-[1px] pt-10 mt-20 border-[#a1b562]">
        <div className="w-1/2">
        <h1 className='text-7xl '>Our approch: </h1>
        <button className='flex uppercase gap-10 items-center px-10 py-6 bg-zinc-900 mt-10 rounded-full text-white '>Read More
        <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
        </button>

        
        </div>
        <div className="w-1/2 h-[70vh] rounded-3xl bg-[#b0c859] "></div>
      </div>
    </div>
  )
}

export default About