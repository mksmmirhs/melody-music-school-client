import { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const UserHome = () => {
  const [profile, setProfile] = useState({});
  const { user } = useAuth();
  useEffect(() => {
    fetch(
      `https://melody-music-school-server.vercel.app/users/profile?email=${user?.email}`
    )
      .then(res => res.json())
      .then(data => {
        setProfile(data);
      });
  }, [user?.email]);
  console.log(profile);
  return (
    <div className="my-8 mx-auto">
      <img src={profile.image} alt="" className="h-[250px]" />
      <p className="mt-4">Email: {profile.email}</p>
      <p>
        User Role:{' '}
        <span className="text-2xl uppercase">
          {profile.role ? profile.role : 'Student'}
        </span>
      </p>
    </div>
  );
};

export default UserHome;
