// import React from 'react'
// import { FaBagShopping } from "react-icons/fa6";
// import { FaHandHoldingHeart } from "react-icons/fa";
// import { MdVerified } from "react-icons/md";
// import { MdOutlinePublishedWithChanges } from "react-icons/md";



// function Choose() {
//   return (
//     <div className='mt-24'>
//     <h1 className='text-center mt-20 text-[36px] font-semibold text-gray-500'>Why Choosing Us... ?</h1>
//       <div className='mt-20'>
//       <ul className='flex space-x-48 justify-center text-[20px] font-semibold '>
//         <li><FaBagShopping className='ml-14 text-[50px] mb-5'/> <span className='text-gray-600 flex'>EASY EXCHANGE <MdOutlinePublishedWithChanges className='text-[25px] ml-1 mt-1'/></span></li>
//         <li><FaHandHoldingHeart className='ml-[75px] text-[50px] mb-5'/><span className='text-gray-600'>100% HANDPICKED</span></li>
//         <li><MdVerified className='ml-14 text-[50px] mb-5'/> <span className='text-gray-600'>ASSURED QUALITY</span></li>
//       </ul>
//       </div>
//     </div>
//   )
// }

// export default Choose

























import React from 'react';
import { FaBagShopping } from "react-icons/fa6";
import { FaHandHoldingHeart } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import { MdOutlinePublishedWithChanges } from "react-icons/md";

function Choose() {
  return (
    <div className="mt-24 px-4 md:px-0">
      <h1 className="text-center mt-20 text-[28px] md:text-[36px] font-semibold text-gray-500">
        Why Choosing Us... ?
      </h1>
      <div className="mt-20">
        <ul className="flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-24 justify-center text-[18px] md:text-[20px] font-semibold">
          <li className="flex items-center justify-center">
            <FaBagShopping className="text-[40px] mb-2" />
            <span className="text-gray-600 flex items-center ml-2">
              EASY EXCHANGE
              <MdOutlinePublishedWithChanges className="text-[20px] ml-1" />
            </span>
          </li>
          <li className="flex items-center justify-center">
            <FaHandHoldingHeart className="text-[40px] mb-2" />
            <span className="text-gray-600 ml-2">100% HANDPICKED</span>
          </li>
          <li className="flex items-center justify-center">
            <MdVerified className="text-[40px] mb-2" />
            <span className="text-gray-600 ml-2">ASSURED QUALITY</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Choose;
