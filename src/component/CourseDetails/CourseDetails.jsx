import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';


const CourseDetails = () => {
  const coursedata = useLoaderData();
  const navigate = useNavigate();

  const handleCheckOut = () => {
    
    navigate('/checkout')
  }

  return (
    <div className='bg-[#1C2B35]'>
    <div className='w-[800px] mx-auto'>
    <div className="card card-compact shadow-xl pt-9">
      <figure><img src={coursedata.image_url} alt="logos" /></figure>
      <div className="card-body">
        <h2 className="card-title text-lg text-left text-white">{coursedata.title}</h2>
        <div className='flex justify-between'>
          <h2 className="card-title text-base text-white">$ {coursedata.price} </h2>
          <h2 className="card-title text-base text-white"> {coursedata.total_lecture} </h2>
        </div>
        <p className="text-base text-white">
          {coursedata.details}
        </p>
        <div className="card-actions justify-end">
          <button onClick={handleCheckOut} className="btn btn-primary">
             Get premium access
          </button>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default CourseDetails;