import React from 'react';
import { useLoaderData } from 'react-router-dom';

const RightSide = () => {
  const catagoryNews = useLoaderData()
  console.log(catagoryNews)
  return (
    <div>
      {
        catagoryNews.map(news => console.log(news._id))
      }
    </div>
  );
};

export default RightSide;