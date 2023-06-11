import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';

const useInstructor = () => {
  const { user } = useAuth();
  const { data: isInstructor } = useQuery({
    queryKey: ['isInstructor', user.email],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/users/instructor/${user?.email}`
      );

      return res.json();
    },
  });
  return [isInstructor?.instructor];
};

export default useInstructor;