import React from 'react'

function Featured() {
  return (
    <div className='w-full py-20'>
        <div className='w-full px-20 border-b-[1px] border-zinc-700 pb-20'>
            <h1 className='text-7xl font-["Neue_Montreal"] tracking-tight'>Featured Projects</h1>
        </div>
        <div className='px-20'>
        <div className="cards w-full flex gap-10 mt-10">
              <div className="cardcontainer relative w-1/2  h-[75vh]">
              <h1 className='absolute text-[#CDEA68] left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter text-8xl'>FYDE
              {"FYDE".split('').map((item, index)=><span>{item}</span>)}
              </h1>
                <div className='card w-full h-full rounded-xl bg-green-600 overflow-hidden'>
                  <img className='w-full h-full bg-cover' src="https://clearview-communications.com/wp-content/uploads/2024/01/home-cctv-installation-system.jpg" alt="" />
                </div>
              </div>
              <div className="cardcontainer relative w-1/2  h-[75vh]">
              <h1 className='absolute text-[#CDEA68] right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter text-8xl'>VISE
              {"VISE".split('').map((item, index)=><span>{item}</span>)}
              </h1>
                <div className='card w-full h-full rounded-xl bg-green-600 overflow-hidden'>
                <img className='w-full h-full bg-cover' src="https://www.360connect.com/wp-content/uploads/2020/07/image-from-rawpixel-id-2296766-jpeg-1536x864.jpg" alt="" />
                </div>
              </div>
              
        </div>
        </div>
    </div>
  )
}

export default Featured
