import React from 'react';

function Card() {
  return (
    <div className="w-full h-screen bg-zinc-900 flex items-center px-32 gap-5">
      <div className="cardcontainer w-1/2 h-[50vh] flex justify-center items-center">
        <div className="card relative w-full h-96 rounded-xl bg-[#004D43] flex items-center justify-center">
          <img className='w-64 ' src="https://smarttechsecure.com/wp-content/uploads/2022/04/Smarttech_Solution_Logo-removebg-preview.png" alt="" />  
          <button className='absolute px-5 py-1 border-2 rounded-full left-10 bottom-10'>&copy; 2017</button>

        </div>      
      </div>
      <div className="cardcontainer flex gap-5 w-1/2 h-[50vh]">
  <div className="card relative flex justify-center items-center w-full h-96 rounded-xl bg-[#192826]">
    <img className="w-32" src="https://smarttechsecure.com/wp-content/uploads/2022/04/Smarttech_Solution_Logo-removebg-preview.png" alt="" />
    <button className="absolute px-5 py-1 border-2 rounded-full left-10 bottom-10">&copy; 2017</button>
  </div>
  <div className="card relative flex justify-center items-center w-full h-96 rounded-xl bg-[#192826]">
    <img className="w-32" src="https://smarttechsecure.com/wp-content/uploads/2022/04/Smarttech_Solution_Logo-removebg-preview.png" alt="" />
    <button className="absolute px-5 py-1 border-2 rounded-full left-10 bottom-10">&copy; 2017</button>
  </div>
</div>
  
    </div>
  );
}

export default Card;
