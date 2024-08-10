/* import { motion, useAnimation } from 'framer-motion';
import React from 'react';

function Featured() {
  const controls = [useAnimation(), useAnimation()];

  const handleHoverStart = (index) => {
    controls[index].start({ y: 0 });
  };

  const handleHoverEnd = (index) => {
    controls[index].start({ y: "100%" });
  };

  return (
    <div className='w-full py-20'>
      <div className='w-full px-20 border-b-[1px] border-zinc-700 pb-20'>
        <h1 className='text-7xl font-["Neue_Montreal"] tracking-tight'>Featured Projects</h1>
      </div>
      <div className='px-20'>
        <div className="cards w-full flex gap-10 mt-10">
          <motion.div
            onHoverStart={() => handleHoverStart(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className="cardcontainer relative w-1/2 h-[75vh]"
          >
            <h1 className='absolute text-[#CDEA68] right-0 transform translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter text-8xl'>
              {"FYDE".split('').map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={controls[0]}
                  transition={{ ease: "easeInOut", delay: index * 0.1, duration: 0.6 }}
                  className='inline-block'
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className='card w-full h-full rounded-xl overflow-hidden'>
              <img className='w-full h-full object-cover' src="https://clearview-communications.com/wp-content/uploads/2024/01/home-cctv-installation-system.jpg" alt="FYDE" />
            </div>
          </motion.div>
          <motion.div
            onHoverStart={() => handleHoverStart(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className="cardcontainer relative w-1/2 h-[75vh]"
          >
            <h1 className='absolute text-[#CDEA68] left-0 transform -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter text-8xl'>
              {"VISE".split('').map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={controls[1]}
                  transition={{ ease: "easeInOut", delay: index * 0.1, duration: 0.6 }}
                  className='inline-block'
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className='card w-full h-full rounded-xl overflow-hidden'>
              <img className='w-full h-full object-cover' src="https://www.360connect.com/wp-content/uploads/2020/07/image-from-rawpixel-id-2296766-jpeg-1536x864.jpg" alt="VISE" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
*/

import { motion } from 'framer-motion';
import React from 'react';

function Featured() {
  return (
    <div className='w-full py-20'>
      <div className='w-full px-20 border-b-[1px] border-zinc-700 pb-20'>
        <h1 className='text-7xl font-["Neue_Montreal"] tracking-tight'>Featured Projects</h1>
      </div>
      <div className='px-20'>
        <div className="cards w-full flex gap-10 mt-10">
          <motion.div
            className="cardcontainer relative w-1/2 h-[75vh]"
          >
            <div className='card w-full h-full rounded-xl overflow-hidden'>
              <img className='w-full h-full object-cover' src="https://clearview-communications.com/wp-content/uploads/2024/01/home-cctv-installation-system.jpg" alt="FYDE" />
            </div>
          </motion.div>
          <motion.div
            className="cardcontainer relative w-1/2 h-[75vh]"
          >
            <div className='card w-full h-full rounded-xl overflow-hidden'>
              <img className='w-full h-full object-cover' src="https://www.360connect.com/wp-content/uploads/2020/07/image-from-rawpixel-id-2296766-jpeg-1536x864.jpg" alt="VISE" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
