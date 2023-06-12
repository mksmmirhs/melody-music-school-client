import { useQuery } from '@tanstack/react-query';
const useClasses = () => {
  const { refetch, data: allClasses = [] } = useQuery({
    queryKey: ['allClasses'],

    queryFn: async () => {
      const res = await fetch(
        'https://melody-music-school-server.vercel.app/allclasses'
      );
      return res.json();
    },
  });

  return [allClasses, refetch];
};
export default useClasses;
