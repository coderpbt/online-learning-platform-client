import React from 'react';
import { useNavigate } from 'react-router-dom';

const SingleCourse = ({item}) => {
  const {image_url,title,price,total_lecture,_id} = item;
  const getQuizeId = useNavigate();

  const handlerAddToCart = (_id) => {
    getQuizeId(`/courses/${_id}`)
  }
  return (
    <div className="card card-compact shadow-xl">
    <figure><img src={image_url} alt="logos" /></figure>
    <div className="card-body">
      <h2 className="card-title text-lg text-left text-white">{title}</h2>
      <div className='flex justify-between'>
      <h2 className="card-title text-base text-white">$ {price} </h2>
      <h2 className="card-title text-base text-white"> {total_lecture} </h2>
      </div>
      <div className="card-actions justify-end">
        <button onClick={() => handlerAddToCart(_id)} className="btn btn-primary">
        Courses Details
          <span><i class="fa-solid fa-arrow-right"></i></span>
        </button>
      </div>
    </div>
  </div>
  );
};

export default SingleCourse;