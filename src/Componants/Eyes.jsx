import React, { useEffect, useState } from 'react';

function Eyes() {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;
      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className='eyes w-full h-screen overflow-hidden flex items-center justify-center relative bg-white'>
      <div className="relative w-full max-w-4xl h-3/4 bg-cover bg-center bg-[url('https://smarttechsecure.com/wp-content/uploads/2022/05/Mission.jpg')] p-10">
      </div>
      <div className="absolute flex gap-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex items-center justify-center w-[14vw] h-[14vw] rounded-full bg-zinc-100">
          <div className="relative w-1/2 h-1/2 flex items-center justify-center rounded-full bg-zinc-900">
            <div style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }} className="line absolute top-1/2 left-1/2 w-full h-6">
              <div className="w-8 h-8 rounded-full bg-zinc-100"></div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-[14vw] h-[14vw] rounded-full bg-zinc-100">
          <div className="relative w-1/2 h-1/2 flex items-center justify-center rounded-full bg-zinc-900">
            <div style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }} className="line absolute top-1/2 left-1/2 w-full h-6">
              <div className="w-8 h-8 rounded-full bg-zinc-100"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyes;
