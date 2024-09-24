// import React from 'react'
// import banner from '../assets/banner'
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from 'react-slick';


// function Display() {

//     const settings = {
//         dots: true,            
//         infinite: true,        
//         speed: 500,            
//         slidesToShow: 1,       
//         slidesToScroll: 1,    
//         autoplay: true,      
//         autoplaySpeed: 1500,  
//         arrows: true,         
//       };
//       return (
//         <div className="w-full mt-10 rounded-2xl"> {/* Container styling with Tailwind */}
//           <Slider {...settings}>
//             <div>
//               <img src={banner.banner1} alt="Banner 1" className="w-full h-auto object-cover rounded-2xl" />
//             </div>
//             <div>
//               <img src={banner.banner2} alt="Banner 2" className="w-full h-auto object-cover rounded-2xl" />
//             </div>
//             <div>
//               <img src={banner.banner3} alt="Banner 3" className="w-full h-auto object-cover rounded-2xl" />
//             </div>
//           </Slider>
//         </div>
//       );
//     }
    

// export default Display







import React from 'react';
import banner from '../assets/banner';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

function Display() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: true,
  };

  return (
    <div className="w-full mt-10 p-4 md:p-0 rounded-2xl overflow-hidden"> {/* Added padding and overflow hidden for better layout */}
      <Slider {...settings}>
        <div>
          <img src={banner.banner1} alt="Banner 1" className="w-full h-auto object-cover rounded-2xl" />
        </div>
        <div>
          <img src={banner.banner2} alt="Banner 2" className="w-full h-auto object-cover rounded-2xl" />
        </div>
        <div>
          <img src={banner.banner3} alt="Banner 3" className="w-full h-auto object-cover rounded-2xl" />
        </div>
      </Slider>
    </div>
  );
}

export default Display;
