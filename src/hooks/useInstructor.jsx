import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';

const useInstructor = () => {
  const { user } = useAuth();
  const { data: isInstructor, isLoading } = useQuery({
    queryKey: ['isInstructor', user?.email],
    queryFn: async () => {
      const res = await fetch(
        `https://melody-music-school-server.vercel.app/users/instructor/${user?.email}`
      );

      return res.json();
    },
  });
  return [isInstructor?.instructor, isLoading];
};

export default useInstructor;
