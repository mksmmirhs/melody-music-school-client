import Swal from 'sweetalert2';
import useAuth from '../hooks/useAuth';

const SocialLogin = () => {
  const { googleSignIn } = useAuth();
  const googleLog = () => {
    googleSignIn()
      .then(login => {
        const user = login.user;
        console.log(user);
        const saveUser = {
          name: user.displayName,
          email: user.email,
          image: user.photoURL,
        };
        console.log(saveUser);
        fetch('https://melody-music-school-server.vercel.app/users', {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(saveUser),
        }).then(res => res.json());
        Swal.fire('User Login!', 'Successful!', 'success');
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <div className="">
      <div className="divider">Social Login</div>
      <div className="grid h-20 card bg-base-300 rounded-box place-items-center">
        <button onClick={googleLog} className="btn">
          Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
