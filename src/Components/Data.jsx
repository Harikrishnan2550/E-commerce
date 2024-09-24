import React from 'react'
import assets  from '../assets/assets'
import POPULAR from '../assets/popular'

function Data() {
  return (
    <div className='pb-10 '>
    <div className=''>
    <h1 className='ml-16 mt-20 text-[36px] font-semibold text-gray-500 '>Biggest Deals On Top Brands</h1>
    </div>
    <div className='grid grid-cols-4 gap-16 p-16 h-[600px] w-[1500px] pb-20 '>
    
            {POPULAR.map((value)=>(
                <div key={value.id} className=' shadow-teal-600 shadow-lg rounded-3xl hover:scale-105 transform transition-transform duration-300'>
                <img src={value.image} alt="image" className='w-[400px] h-[400px] object-contain  rounded-2xl ' />
                <h1 className='font-semibold text-[17px] mt-5 text-center'>{value.name}</h1>
                <div className='flex ml-8'>
                <p className='text-[18px] font-medium mt-4 ml-6'>Rs.{value.new_price}</p>      
                <p className='text-[16px] font-medium mt-4 ml-6 opacity-45 line-through mb'>Rs.{value.old_price}</p>
                </div>
                </div>
          ))}
    </div>
      
    </div>
  )
}

export default Data









// import React from 'react';
// import assets from '../assets/assets';
// import POPULAR from '../assets/popular';

// function Data() {
//   return (
//     <div className="pb-10">
//       <div>
//         <h1 className="ml-4 md:ml-16 mt-20 text-[24px] md:text-[36px] font-semibold text-gray-500">
//           Biggest Deals On Top Brands
//         </h1>
//       </div>
//       {/* Responsive Grid Layout */}
//       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12 p-4 md:p-16 pb-20">
//         {POPULAR.map((value) => (
//           <div
//             key={value.id}
//             className="shadow-teal-600 shadow-lg rounded-3xl hover:scale-105 transform transition-transform duration-300"
//           >
//             <img
//               src={value.image}
//               alt="image"
//               className="w-full h-auto object-contain rounded-t-2xl"
//             />
//             <h1 className="font-semibold text-[16px] md:text-[17px] mt-3 text-center">
//               {value.name}
//             </h1>
//             <div className="flex justify-center mt-4">
//               <p className="text-[16px] md:text-[18px] font-medium mr-2">
//                 Rs.{value.old_price}
//               </p>
//               <p className="text-[14px] md:text-[16px] font-medium opacity-45 line-through">
//                 Rs.{value.new_price}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Data;
