import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSide = () => {
  const [catagorys, setCatagorys] = useState([])
  useEffect(() => {
    fetch('http://localhost:5000/categoris')
    .then(res => res.json())
    .then(data => setCatagorys(data));
  },[])

  return (
      <div>
        {
          catagorys.map(catagory => <p className='m-3 text-left' key={catagory.id}>
            <Link className='text-white ' to={`/catagory/${catagory.id}`}>{catagory.name}</Link>
          </p>)
        }
      </div>
  );
};

export default LeftSide;