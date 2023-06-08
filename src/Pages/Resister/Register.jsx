import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Register = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const { createUser } = useAuth();

  const onSubmit = data => {
    createUser(data.email, data.password)
      .then(createdUser => {
        console.log(createUser.user);
      })
      .catch(err => {
        console.log(err);
      });
    console.log(data);
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered"
                {...register('name', { required: true })}
              />
              {errors.name && (
                <span className="text-red-600">Name is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Image Url</span>
              </label>
              <input
                type="text"
                placeholder="Image Url"
                className="input input-bordered"
                {...register('imageUrl', { required: true })}
              />
              {errors.imageUrl && (
                <span className="text-red-600">Image URL is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                {...register('email', { required: true })}
                placeholder="email"
                className="input input-bordered"
              />
              {errors.email && (
                <span className="text-red-600">Email is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                {...register('password', {
                  required: true,
                  minLength: 6,
                  pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/,
                })}
              />
              {errors.password?.type === 'required' && (
                <p className="text-red-600">Password is required</p>
              )}
              {errors.password?.type === 'minLength' && (
                <p className="text-red-600">Password must be 6 characters</p>
              )}
              {errors.password?.type === 'pattern' && (
                <p className="text-red-600">
                  Password must have one Uppercase and one special character.
                </p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                placeholder="confirm password"
                className="input input-bordered"
                {...register('passwordConfirmation', {
                  validate: value =>
                    value === watch('password') || 'Passwords do not match',
                })}
              />
              {errors.passwordConfirmation && (
                <p>{errors.passwordConfirmation.message}</p>
              )}
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary bg-[#68c4bc] border-0">
                Login
              </button>
            </div>
            <p>
              Already a user?{' '}
              <span className="text-[#68c4bc]">
                <Link to="/login">Login</Link>
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
