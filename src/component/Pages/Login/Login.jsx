import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContext } from '../../../ContextProvider/ContextProvider';
import { toast } from 'react-toastify';

const Login = () => {
  const {signInwithG,sigIn,signInwithGithub} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/'


  const handleOnSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;


    sigIn(email, password)
    .then((result) => {
      const user = result.user;
      console.log(user)
      form.reset()
      navigate(from, {replace: true})
      toast.success('Login SuccessFul')
     
    })
    .catch((error) => {
      console.error(error)
      toast.warning(`email address or password doesn't match`)
    })

  }


  const handleGoogleSub = () => {
    signInwithG()
    .then((result) => {
      const user = result.user;
      console.log(user)
      navigate(from, {replace: true})
    })
    .catch((error) => {
      console.error(error)
    })
  }

  const handleGithub = () => {
    signInwithGithub()
    .then((result) => {
      const user = result.user;
      console.log(user)
      navigate(from, {replace: true})
    })
    .catch((error) => {
      console.error(error)
    })
  }

  return (
    <div className="hero min-h-screen">
      <div className="hero-content lg:w-[75%] flex-col w-[90%] ">
        <div className="text-center lg:text-left">
          <h1 className="text-3xl text-white font-bold">Login now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <form onSubmit={handleOnSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="Enter Email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="Enter Password" className="input input-bordered" />
                <label className="label">
                  <small>Not a member yet? <Link to='/register' className="label-text-alt font-bold link link-hover">Register</Link></small>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <div className='flex'>
                <div className="form-control mr-1 mt-6">
                  <button onClick={handleGoogleSub} className="btn btn-primary capitalize text-[12px]"><FaGoogle className='mr-1' /> Login With Google</button>
                </div>
                <div className="form-control ml-1 mt-6">
                  <button onClick={handleGithub} className="btn btn-primary capitalize text-[12px]"><FaGithub className='mr-1' /> Login With Github</button>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;