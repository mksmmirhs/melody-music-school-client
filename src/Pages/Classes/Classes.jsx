import { useEffect, useState } from 'react';
import ClassCard from './ClassCard';

const Classes = () => {
  const [allClasses, setAllClasses] = useState([]);
  useEffect(() => {
    fetch('https://melody-music-school-server.vercel.app/classes')
      .then(res => res.json())
      .then(data => setAllClasses(data));
  }, []);
  return (
    <div className="grid grid-cols-3 my-8 gap-4">
      {allClasses.map(cls => (
        <ClassCard key={cls._id} course={cls}></ClassCard>
      ))}
    </div>
  );
};

export default Classes;
