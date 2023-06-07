import { Link } from 'react-router-dom';
import { FaEyeSlash } from 'react-icons/fa';
import { useState } from 'react';
const Login = () => {
  const [passwordField, setPasswordField] = useState('password');
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={passwordField}
                placeholder="password"
                className="input input-bordered"
              />
              <FaEyeSlash
                className="-mt-8 ms-[180px]"
                onClick={() => setPasswordField('text')}
              ></FaEyeSlash>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary bg-[#68c4bc] border-0">
                Login
              </button>
            </div>
            <p>
              New to site?{' '}
              <span className="text-[#68c4bc]">
                <Link to="/register">Register</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
