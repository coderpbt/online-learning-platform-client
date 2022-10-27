import React from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { FaFilePdf } from 'react-icons/fa';
import Pdf from "react-to-pdf";

const ref = React.createRef();

const CourseDetails = () => {
  const coursedata = useLoaderData();

  const coursedataId = useNavigate();

  const handlerAddToCarts = (_id) => {
    coursedataId(`/checkout/${_id}`)
  }

  return (
    <div className='bg-[#1C2B35]'>
      <div className='xl:w-[800px] mx-auto w-[95%]'>
        <div className="card card-compact shadow-xl pt-9">
          <div className='flex justify-between items-center'>
            <h2 className="card-title text-lg p-3 text-left text-white">{coursedata.title}</h2>
            <>
              <Pdf targetRef={ref} filename="course.pdf">
                {({ toPdf }) => <button className='text-white p-3' onClick={toPdf}><FaFilePdf className='text-white' /></button>}
              </Pdf>
            </>

          </div>
          <figure><img src={coursedata.image_url} alt="logos" /></figure>
          <div className="card-body">

            <div className='flex justify-between'>
              <h2 className="card-title text-base text-white">Course Cost : $ {coursedata.price} </h2>
              <h2 className="card-title text-base text-white"> {coursedata.total_lecture} </h2>
            </div>
            <p ref={ref} className="text-base text-justify text-[#309255]">
              {coursedata.details}
            </p>
            <div className="card-actions justify-end">
              <button onClick={() => handlerAddToCarts(coursedata._id)} className="btn btn-primary">
                <Link to='/checkout'> Get premium access</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;