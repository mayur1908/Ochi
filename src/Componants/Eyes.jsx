import React from 'react'

function Eyes() {
  return (
    <div className='eyes w-full h-screen overflow-hidden flex items-center justify-center relative'>
      <div className="relative w-full max-w-4xl h-3/4 bg-cover bg-center bg-[url('https://smarttechsecure.com/wp-content/uploads/2022/05/Mission.jpg')] p-10">
      </div>
      <div className="absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] ">
        <div className="flex items-center justify-center w-[14vw] h-[14vw] rounded-full bg-zinc-100">
        <div className="w-1/2 h-1/2 flex items-center justify-center rounded-full bg-zinc-900">
        <div className="line w-full h-6 "> 
        <div className="w-8 h-8 rounded-full bg-zinc-100"></div>
        </div> 
        </div>
        </div>
        <div className="flex items-center justify-center w-[14vw] h-[14vw] rounded-full bg-zinc-100">
        <div className="w-1/2 h-1/2 flex items-center justify-center rounded-full bg-zinc-900">
        <div className="line w-full h-6 "> 
        <div className="w-8 h-8 rounded-full bg-zinc-100"></div>
        </div> 
        </div>
        </div>
      </div>
    </div>

  )
}

export default Eyes
