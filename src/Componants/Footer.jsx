import React from 'react'

function Footer() {
  return (
    <div>
      <div className="flex gap-5 w-full h-screen bg-zinc-900 p-20 font-['Founders_Grotesk_X-Condensed']">
        <div className='w-1/2 h-full flex flex-col justify-between'>
                <div className="heading">
                <h1 className='text-[05vw] font-semibold uppercase leading-none -mb-5'>Eye-</h1>
                <h1 className='text-[05vw] font-semibold uppercase leading-none -mb-5'>opening</h1>
                </div>
                <svg width="195" height="80" viewBox="0 0 195 80" fill="none" xmlns="http://www.w3.org/2000/svg"><image href="https://smarttechsecure.com/wp-content/uploads/2022/04/Smarttech_Solution_Logo-removebg-preview.png" width="195" height="80"></image>
                </svg>
        </div>
        <div className="w-1/2">
            <h1 className='text-[05vw] font-semibold uppercase leading-none -mb-10'>
              Presentations
            </h1>
            <div className="dets font-[Neue_Montreal mt-20">
                <a className='block text-xl font-light' href="#">FaceBook</a>
                <a className='block text-xl font-light' href="#">Instagram</a>
                <a className='block text-xl font-light' href="#">Twitter</a>
              </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
