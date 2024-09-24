import React from 'react'
import { IoIosStar } from "react-icons/io";
import { MdOutlineLocalOffer } from "react-icons/md";
 


function Banner() {
  return (
    <div>
     <div className=''>
    <img src="./src/assets/bgecom.png" className='object-cover' alt="image" />

      <div className='absolute top-[300px] left-28'>
        <h1 className='text-[60px] font-semibold'>Digital Shopping <br /> Hub Junction</h1>
          <p className='text-[14px] opacity-60 mt-6'>A clothes shop or clothes store is any shop which sells items of ready-made clothing. <br /> A small shop which sells expensive or designer clothing may be called a boutique. A <br /> shop that sells clothes for a narrowly-restricted market such as school uniforms or <br /> outdoor sports ,and so many other cloth may be called an outfitter.
          </p>
            <div className='mt-10 flex space-x-4'>
                    <div className='flex space-x-3 text-[18px] mt-1'>
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStar />
                    </div>

                    <h3 className='text-[18px]'> <span className='font-semibold'>198k</span> Excellent Reviews</h3>
            </div>

            <div className='space-x-48 mt-4'>
            <button className='px-4 py-1 rounded-full bg-black text-white border-2 border-black text-[18px] font-semibold mt-12'>Shop now</button>
            <button className=' flex w-[130px] py-1 rounded-full  border-2 border-black text-[18px] font-semibold absolute  top-[422px]'> <span className='ml-12'>Offers</span></button>
            <MdOutlineLocalOffer className='absolute top-[432px] right-72'/>
            </div>
      </div>
     </div>
    </div>
  )
}

export default Banner










// import React from 'react';
// import { IoIosStar } from "react-icons/io";
// import { MdOutlineLocalOffer } from "react-icons/md";

// function Banner() {
//   return (
//     <div className="relative">
//       {/* Background Image */}
//       <img
//         src="./src/assets/bgecom.png"
//         className="w-full h-auto object-cover"
//         alt="banner image"
//       />

//       {/* Banner Text Content */}
//       <div className="absolute top-[150px] md:top-[300px] left-8 md:left-28 text-left">
//         <h1 className="text-[30px] md:text-[60px] font-semibold leading-tight">
//           Digital Shopping <br /> Hub Junction
//         </h1>
//         <p className="text-[12px] md:text-[14px] opacity-60 mt-4 md:mt-6">
//           A clothes shop or clothes store is any shop which sells items of
//           ready-made clothing. <br className="hidden md:inline" /> A small shop
//           which sells expensive or designer clothing may be called a boutique.{" "}
//           <br className="hidden md:inline" /> A shop that sells clothes for a
//           narrowly-restricted market such as school uniforms or <br className="hidden md:inline" />
//           outdoor sports, and so many other clothes may be called an outfitter.
//         </p>

//         {/* Star Reviews Section */}
//         <div className="mt-8 md:mt-10 flex items-center space-x-4">
//           <div className="flex space-x-1 md:space-x-3 text-[16px] md:text-[18px] mt-1">
//             <IoIosStar />
//             <IoIosStar />
//             <IoIosStar />
//             <IoIosStar />
//           </div>
//           <h3 className="text-[16px] md:text-[18px]">
//             <span className="font-semibold">198k</span> Excellent Reviews
//           </h3>
//         </div>

//         {/* Buttons Section */}
//         <div className="flex flex-wrap mt-8 md:mt-12 items-center space-x-4">
//           <button className="px-4 py-1 rounded-full bg-black text-white border-2 border-black text-[16px] md:text-[18px] font-semibold">
//             Shop now
//           </button>
//           <div className="relative flex items-center">
//             <button className="px-4 py-1 flex w-[130px] rounded-full border-2 border-black text-[16px] md:text-[18px] font-semibold">
//               <span className="mx-auto">Offers</span>
//             </button>
//             <MdOutlineLocalOffer className="absolute right-[-25px] top-[50%] transform -translate-y-1/2 text-[24px] md:text-[30px]" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Banner;
