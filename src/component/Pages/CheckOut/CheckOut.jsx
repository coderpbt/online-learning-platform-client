import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../ContextProvider/ContextProvider';

const CheckOut = () => {
  const { user } = useContext(AuthContext)
  const dtls = useLoaderData()
  console.log(dtls)
  return (
    <div className='bg-[#1C2B35]'>
      <div className='w-[1200px] mx-auto'>
        <div className='py-32 '>
          <h2 className='text-white text-3xl font-bold mb-5'>Checkout Details</h2>
          <div>
            <h3 className='text-white text-left'> <span className='text-white font-bold my-1'>Customer Name </span>: {user?.displayName}</h3>
            <h3 className='text-white text-left'> <span className='text-white font-bold my-1'>Product Id</span> : {dtls._id}</h3>
            <h3 className='text-white text-left'> <span className='text-white font-bold my-1'>Course Name</span> : {dtls.title}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;