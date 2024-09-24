import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";



function Footer() {
  return (
    <div className='bg-[#2c4152] mt-16 text-gray-200 p-10 pr-20 pl-20'>
      <div className=''>
      <ul className='flex justify-evenly '>
         <li className='space-y-1'>
         <h3 className='text-[20px] mb-8'>About</h3>
         <li className=''><a href="">Who we are</a></li>
         <li><a href="">Join Our Team</a></li>
         <li><a href="">Terms & Conditions</a></li>
         <li><a href="">We Respect Your Privacy</a></li>

         </li>
         <li className='space-y-1'>
         <h3 className='text-[20px] mb-8'>Help</h3>
         <li className=''><a href="">Returns</a></li>
         <li><a href="">Cancellations</a></li>
         <li><a href="">Track Your Order</a></li>
         </li>
         <li className='space-y-1'>
         <h3 className='text-[20px] mb-8'>Shop by</h3>
         <li className=''><a href="">Men's</a></li>
         <li><a href="">Women's</a></li>
         <li><a href="">Kids</a></li>
         </li>
      </ul>
      </div>
      <div className='border-[0.2px] border-gray-300 w-[95%] ml-10 mt-20'></div>
      <div className='flex justify-between p-10'>
      <div className='text-gray-400 '>  &copy; {new Date().getFullYear()}   Hari. All rights reserved. </div>
        <ul className='flex space-x-5 text-[25px] justify-center  text-gray-400'>
            <li><a href=""><FaFacebookF /></a></li>
            <li><a href=""><FaInstagram /> </a></li>
            <li><a href=""><FaXTwitter /></a></li>
        </ul>
        <div className='text-gray-400 space-x-5 md:flex-shrink'>
        <a href="">Privacy</a>
        <a href="">Terms of Service</a>
    </div>
      </div>

    </div>
  )
}

export default Footer
































// import React from 'react';
// import { FaFacebookF } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa6";
// import { FaXTwitter } from "react-icons/fa6";

// function Footer() {
//   return (
//     <div className='bg-[#2c4152] mt-28 text-gray-200 p-5 md:p-10'>
//       <div>
//         <ul className='grid grid-cols-1 md:grid-cols-3 gap-5'>
//           <li className='space-y-1'>
//             <h3 className='text-[18px] md:text-[20px] mb-3'>About</h3>
//             <ul className='space-y-1'>
//               <li><a href="" className="hover:text-[#7eedf1]">Who we are</a></li>
//               <li><a href="" className="hover:text-[#7eedf1]">Join Our Team</a></li>
//               <li><a href="" className="hover:text-[#7eedf1]">Terms & Conditions</a></li>
//               <li><a href="" className="hover:text-[#7eedf1]">We Respect Your Privacy</a></li>
//             </ul>
//           </li>
//           <li className='space-y-1'>
//             <h3 className='text-[18px] md:text-[20px] mb-3'>Help</h3>
//             <ul className='space-y-1'>
//               <li><a href="" className="hover:text-[#7eedf1]">Returns</a></li>
//               <li><a href="" className="hover:text-[#7eedf1]">Cancellations</a></li>
//               <li><a href="" className="hover:text-[#7eedf1]">Track Your Order</a></li>
//             </ul>
//           </li>
//           <li className='space-y-1'>
//             <h3 className='text-[18px] md:text-[20px] mb-3'>Shop by</h3>
//             <ul className='space-y-1'>
//               <li><a href="" className="hover:text-[#7eedf1]">Men's</a></li>
//               <li><a href="" className="hover:text-[#7eedf1]">Women's</a></li>
//               <li><a href="" className="hover:text-[#7eedf1]">Kids</a></li>
//             </ul>
//           </li>
//         </ul>
//       </div>
//       <div className='border-[0.2px] border-gray-300 w-full my-5'></div>
//       <div className='flex flex-col md:flex-row justify-between items-center p-5'>
//         <div className='text-gray-400'> &copy; {new Date().getFullYear()} Hari. All rights reserved. </div>
//         <ul className='flex space-x-5 mt-4 md:mt-0 text-[25px] text-gray-400'>
//           <li><a href=""><FaFacebookF className="hover:text-[#7eedf1]" /></a></li>
//           <li><a href=""><FaInstagram className="hover:text-[#7eedf1]" /></a></li>
//           <li><a href=""><FaXTwitter className="hover:text-[#7eedf1]" /></a></li>
//         </ul>
//         <div className='text-gray-400 space-x-5 mt-4 md:mt-0'>
//           <a href="" className="hover:text-[#7eedf1]">Privacy</a>
//           <a href="" className="hover:text-[#7eedf1]">Terms of Service</a>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Footer;
