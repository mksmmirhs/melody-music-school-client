import { useQuery } from '@tanstack/react-query';
const useClasses = () => {
  const { refetch, data: allClasses = [] } = useQuery({
    queryKey: ['allClasses'],

    queryFn: async () => {
      const res = await fetch('http://localhost:5000/allclasses');
      return res.json();
    },
  });

  return [allClasses, refetch];
};
export default useClasses;
