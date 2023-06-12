import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';

const useAdmin = () => {
  const { user } = useAuth();
  const { data: isAdmin, isLoading } = useQuery({
    queryKey: ['isAdmin', user.email],
    queryFn: async () => {
      const res = await fetch(
        `https://melody-music-school-server.vercel.app/users/admin/${user?.email}`
      );

      return res.json();
    },
  });
  return [isAdmin?.admin, isLoading];
};

export default useAdmin;
