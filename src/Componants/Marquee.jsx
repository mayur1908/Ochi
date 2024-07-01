import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
  
  return (
    <div>
      <h1 className='w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]'>
        <div className="text border-t-2 border-b-2 border-zinc-300 flex gap-10 whitespace-nowrap">
        <h1 className='text-[13vw] leading-none font-["Founders_Grotesk_X-Condensed"] uppercase font-semibold  '>We are Supplier</h1>
        <h1 className='text-[13vw] leading-none font-["Founders_Grotesk_X-Condensed"] uppercase font-semibold  '>We are Service Provider</h1>
        </div>
      </h1>
    </div>
  )
}

export default Marquee
