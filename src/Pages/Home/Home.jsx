import { useEffect, useState } from 'react';
import Heading from '../../components/Heading';
import Banner from './Banner';

const Home = () => {
  const [popularClass, setPopularClass] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/courses')
      .then(res => res.json())
      .then(data => setPopularClass(data));
  }, []);
  return (
    <div>
      <Banner></Banner>
      <Heading heading="Popular Classes"></Heading>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
        {popularClass.map(classes => (
          <div key={classes._id} className="card w-full bg-base-100 shadow-xl ">
            <figure>
              <img src={classes.image} className="h-[250px]" />
            </figure>
            <div className="card-body">
              <h2 className="card-title uppercase">{classes.instrument}</h2>
            </div>
          </div>
        ))}
      </div>
      <Heading heading="Popular Instructors"></Heading>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
        {popularClass.map(classes => (
          <div key={classes._id} className="card w-full bg-base-100 shadow-xl ">
            <figure>
              <img src={classes.instructor.image} className="h-[250px]" />
            </figure>
            <div className="card-body">
              <h2 className="card-title uppercase">
                {classes.instructor.name}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
