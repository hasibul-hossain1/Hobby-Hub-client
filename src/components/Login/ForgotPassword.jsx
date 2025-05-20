import { Link, useLocation, useNavigate } from "react-router";
import { resetPassword } from "../../contexts/Firebase/UserContext";
import { useState } from "react";

const ForgotPassword = () => {
  const navigate=useNavigate()
const [error,setError]=useState('')
const location=useLocation()
  const handleSubmit = (e) => {
   e.preventDefault()
   const email=e.target.email.value
   resetPassword(email).then(()=>{
    navigate('/forget/sent')
   }).catch(err=>setError(err?.message))
  };

  return (
    <div className="flex justify-center items-center h-[80vh]">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-xl">
        <h2 className="text-2xl font-semibold text-center">Forgot Password</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="label">
              <span className="label-text">Email Address</span>
            </label>
            <input
              type="email"
              name="email"
              className="input input-bordered w-full"
              defaultValue={location.state}
              placeholder="Enter your email"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-full">
            Send Reset Link
          </button>
        </form>
        <p>{error?error:''}</p>
        <div className="text-center">
          <p className="text-sm">
            Remembered your password?{" "}
            <Link to="/signin" className="text-blue-500 hover:underline">
              Log in here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
