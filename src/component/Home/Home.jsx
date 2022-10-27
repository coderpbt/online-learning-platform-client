import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../../images/slider-1.webp'


const Home = () => {
  return (
    <div className='bg-[#1C2B35]'>
      <div className='xl:w-[1200px] mx-auto w-[95%]'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 items-center py-8 lg:py-14'>
            <div className='block lg:hidden'>
              <img className='w-full' src={banner} alt="ban" />
            </div>
            <div className='text-left'>
              <p className='text-white text-[#309255] text-xl text-left font-semibold'>Start your favourite course</p>
              <h2 className='text-white text-4xl lg:text-5xl font-bold text-left py-4 lg:py-8'>Now learning from  anywhere, and build  your bright career.</h2>
              <small className='text-white text-left text-xl block mt-2 mb-5'>It has survived not only five centuries but also the leap into electronic typesetting.</small>
              <button className="btn btn-active btn-primary"><Link to='/courses'>Start A Course</Link></button>
            </div>
            <div className='hidden lg:block'>
              <img className='w-full' src={banner} alt="ban" />
            </div>
          </div>
       </div>
    </div>
  );
};

export default Home;