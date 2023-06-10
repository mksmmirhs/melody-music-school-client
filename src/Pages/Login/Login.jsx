import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaEyeSlash } from 'react-icons/fa';
import { useState } from 'react';
import SocialLogin from '../../Shared/SocialLogin';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
const Login = () => {
  const [passwordField, setPasswordField] = useState('password');
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  const handleLogin = event => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email, password);
    signIn(email, password)
      .then(res => {
        console.log(res);
        Swal.fire({
          icon: 'success',
          title: 'Login successful.',
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(from, { replace: true });
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
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
                name="password"
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
          </form>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default Login;
