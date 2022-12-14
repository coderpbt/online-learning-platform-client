import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../ContextProvider/ContextProvider';

const Register = () => {

  const {createUser, updateProfileName} = useContext(AuthContext)
  const navigate = useNavigate();


  const handleOnSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password,name,photoURL)

    createUser(email,password)
    .then((result) => {
      const user = result.user;
      handleUpdateNameProfile(name, photoURL)
      console.log(user)
      form.reset();
      toast.success('Registion SuccesFull')
      navigate('/login')
    })
    .catch((error) => {
      console.error(error)
      const errorMessage = error.message
      toast.warning(`${errorMessage}`)
    })

  }

  const handleUpdateNameProfile = (name, photoURL) => {
    const profile = {
      displayName : name,
      photoURL : photoURL
    }
    updateProfileName(profile)
    .then(() => {})
    .catch((error) => {
      console.log(error)
    })
  }


  return (
    <div className="hero min-h-screen">
      <div className="hero-content w-[75%] flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-3xl text-white font-bold">Register now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <form onSubmit={handleOnSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name='name' placeholder="Enter Full Name" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input type="text" name='photoURL' placeholder="Enter photo URL" className="input input-bordered" />
              </div>
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
                  <small>Already a member? <Link to='/login' className="label-text-alt font-bold link link-hover">LogIn</Link></small>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;