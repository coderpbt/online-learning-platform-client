import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleCourse from '../SingleCourse/SingleCourse';
import LeftSide from './LeftSide';

const Course = () => {
  const catagoryCourses = useLoaderData()
  console.log(catagoryCourses)
  return (
    <div className='bg-[#1C2B35]'>
      <div className='xl:w-[1200px] mx-auto w-[95%]'>
        <div className='flex flex-wrap justify-between pt-1 lg:pt-10'>
          <div className='lg:w-[20%] w-[100%] pt-2'>
            <LeftSide />
          </div>
          <div className='lg:w-[78%] w-[100%]'>
            <div className="flex justify-between flex-wrap">
              <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 pt-2'>
                {
                  catagoryCourses.map(item => <SingleCourse key={item.id} item={item} />)
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;