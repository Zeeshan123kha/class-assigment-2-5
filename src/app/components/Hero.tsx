import React from 'react';
import Image from 'next/image';
import { FaArrowRightLong } from "react-icons/fa6";

const Hero = () => {
  return (
    <div>
       <div className='w-[1920px] h-[829px] bt-[92px] left-1 py-[140px] px-[220px] bg-[#043873] ' >
        <h2 className='w-[656px] h-[154px] font-inter font-semibold text-[64px] leading-[77.45px] text-white tracking-[-2%]'>
        Get More Done with whitepace
        </h2>
        <p className='w-[656px] h-[60px] font-inter font-normal text-[18px] leading-[30px] text-[#ffffff] mt-6 tracking-[-2%]'>
        Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks
        </p>
        <div>
            <button className='w-[219px] h-[63px] rounded-md p-5 gap-2 bg-[#4F9CF9] text-white mt-16'>
            Try Whitepace free <span><FaArrowRightLong  /></span>
            </button>
        </div>
          <div className='flex items-end'>
            <Image  src='/Image-container.png' alt='picture' width={824} height={549} className=''/>  
            
    
          </div>

       </div>
    </div>
  );
}

export default Hero;
