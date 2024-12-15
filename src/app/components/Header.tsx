import React from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <div>
        <div className='w-[1920px] h-[92px] bg-[#043873] py-4 px-[220px] flex justify-between items-center '>
            <div>
                <Image src='/Logo.png' alt='logon' width={191} height={34} />
            </div>
            <div className='w-[737.5px] h-[60px] flex justify-between items-center'>
                <div className='w-[549px] h-[23px] '>
                <ul className='text-[18px] font-semibold leading-[23px] flex justify-between text-[#FAFAFA]'>
                    <li>Products</li>
                    <li>Services</li>
                    <li>Resources</li>
                    <li>Pricing</li>
                </ul>
              </div>
              <div>
                <button className='py-4 px-10 rounded-lg bg-[#FFE492] gap-[10px]'>
                  Login
                </button>
              </div>
            

            </div>


        </div>
      
    </div>
  );
}

export default Header;
