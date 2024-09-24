import React from 'react'
 import Banner from '../Components/Banner'
import Data from '../Components/Data';
import Display from '../Components/Display';
import Choose from '../Components/Choose';
import Footer from '../Components/Footer';



function Home() {
  return (
    <div className=''>
    <Banner/>
    
    <Data/>
    <Display/>
    <Choose/> 
    <Footer/>
    </div>
  )
}

export default Home
