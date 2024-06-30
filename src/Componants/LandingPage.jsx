import React from 'react';
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  return (
    <div className="w-full h-screen bg-zinc-900 pt-1">
      <div className="textstructure mt-40 px-20">
        {["we provide", "fire and", "security solutions"].map((item, index) => (
          <div className="masker" key={index}>
            <div className='w-fit flex items-end overflow-hidden'>
              {index === 1 && (
                <div className='mr-[1vw] w-[8vw] rounded-md h-[4.5vw] -top-[1vw] bg-green-600'></div>
              )}
              <h1 className=' pt-[2vw] -mb-[1vw] uppercase text-[6.8vw] leading-[6.8vw] tracking-[-0.05em] font-["Founders_Grotesk_X-Condensed"] font-bold'>
                {item}
              </h1> 
            </div>
          </div>
        ))}
      </div> 
      <div className="border-t-[1px] border-zinc-800 mt-32 flex justify-between items-center py-5 px-20">
        {["for public and private companies",
            "from the first pitch to IPO",
            ].map((item,index)=>(<p className='text-md capitalize font-semibold font-light tracking-tight leading-none'>
            {item}
        </p>))} 
      <div className="start flex items-center gap-5">
        <div className="px-5 py-2 border-[2px] border-zinc-400 font-tight text-md uppercase rounded-full">
        start</div>
        <div className="w-10 h-10 flex items-center justify-center rounded-full border-[2px] border-zinc-500">
        <span className='rotate-[45deg]'>
          <FaArrowUpLong />
        </span>
      </div>
      </div>
    </div>
    </div> 
  );
}

export default LandingPage;
