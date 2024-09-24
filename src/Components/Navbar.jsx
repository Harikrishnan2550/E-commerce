// import React from 'react'
// import { FaOpencart } from "react-icons/fa";

// function Navbar() {
//   return (
//     <div>
//     <div className='flex justify-between p-3 pl-10 shadow-md bg-[#e6f7ff]'>
//           <div>
//           <img src="./src/assets/image.png" className='w-[250px] h-auto' alt="" />
//           </div>

//           <div className=''>
//           <ul className='flex space-x-9 text-[20px] font-semibold mt-3'>
//             <li><a href="#">Home</a></li>
//             <li><a href="#">Men's</a></li>
//             <li><a href="#">Women's</a></li>
//             <li><a href="#">Kids</a></li>
//           </ul>
//           </div>

//           <div>
//           <ul className='flex space-x-8 mr-10 mt-2'>
//             <li><a href="#" className='text-[30px]'><FaOpencart /></a></li>
//             <li><a href="#" className='px-4 py-1 rounded-full bg-[#7eedf1] border-2 border-black text-[18px] font-semibold'>Login</a></li>
//           </ul>
//           </div>
      
//     </div>

    
//     </div>
//   )
// }

// export default Navbar









import React from 'react';
import { FaOpencart } from "react-icons/fa";

function Navbar() {
  return (
    <div className="shadow-md bg-[#e6f7ff]">
      <div className="flex flex-wrap items-center justify-between p-3 pl-10">
        
        {/* Logo */}
        <div className="flex-shrink-0">
          <img src="./src/assets/image.png" className="w-[150px] md:w-[250px] h-auto" alt="Logo" />
        </div>

        {/* Menu Items */}
        <div className="hidden md:block">  {/* Hidden on small screens, shown on medium+ */}
          <ul className="flex space-x-6 md:space-x-9 text-[16px] md:text-[20px] font-semibold mt-3">
            <li><a href="#">Home</a></li>
            <li><a href="#">Men's</a></li>
            <li><a href="#">Women's</a></li>
            <li><a href="#">Kids</a></li>
          </ul>
        </div>

        {/* Cart and Login */}
        <div className="flex space-x-6 md:space-x-8 mr-10 mt-2">
          <a href="#" className="text-[25px] md:text-[30px]"><FaOpencart /></a>
          <a href="#" className="px-3 md:px-4 py-1 rounded-full bg-[#7eedf1] border-2 border-black text-[16px] md:text-[18px] font-semibold">Login</a>
        </div>

        {/* Mobile Menu (optional for later) */}
      </div>
      
      {/* Mobile Menu (for small screens, if you want a mobile dropdown) */}
      <div className="md:hidden flex justify-center mt-2">
        <ul className="space-x-4 flex text-[16px] font-semibold">
          <li><a href="#">Home</a></li>
          <li><a href="#">Men's</a></li>
          <li><a href="#">Women's</a></li>
          <li><a href="#">Kids</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
