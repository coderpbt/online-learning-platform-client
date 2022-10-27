import React from 'react';
import { Link } from 'react-router-dom';



const SideMenu = ({item,catagory}) => {
  // const {_id, title} = item
  return (
    <div>
      <p className='lg:m-3 m-2 text-left'>
          <Link className='text-white ' to={`/courses/${item._id}`}>{catagory.name}</Link>
          {/* <h3 className='text-white'>{title}</h3> */}
      </p>
    </div>
  );
};

export default SideMenu;