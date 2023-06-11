import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';

const useAdmin = () => {
  const { user } = useAuth();
  const { data: isAdmin } = useQuery({
    queryKey: ['isAdmin', user.email],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/users/admin/${user?.email}`
      );

      return res.json();
    },
  });
  return [isAdmin?.admin];
};

export default useAdmin;
