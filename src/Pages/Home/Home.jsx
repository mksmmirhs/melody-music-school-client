import { useEffect, useState } from 'react';
import Heading from '../../components/Heading';
import Banner from './Banner';

const Home = () => {
  const [popularClass, setPopularClass] = useState([]);
  useEffect(() => {
    fetch('https://melody-music-school-server.vercel.app/courses')
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
      <Heading heading="Latest News"></Heading>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
        <div>
          <h3 className="text-3xl mb-4">International Piano Festival</h3>
          <p>
            International Piano Festival Set to Dazzle Music Enthusiasts [City
            Name] is abuzz with excitement as preparations are in full swing for
            the highly anticipated International Piano Festival, set to take
            place from [Dates]. This prestigious event, known for showcasing
            world-class pianists and celebrating the beauty of piano music,
            promises to captivate audiences with its exceptional lineup and
            enchanting performances. Now in its [Xth] edition, the International
            Piano Festival has firmly established itself as a prominent cultural
            event on the global music calendar. Renowned pianists from around
            the world will gather in [City Name] to present a series of
            recitals, chamber music concerts, and masterclasses, ensuring an
            unforgettable experience for music enthusiasts.
          </p>
        </div>
        <div>
          <h3 className="text-3xl mb-4">Columbia Kids Week</h3>
          <p>
            International Piano Festival Set to Dazzle Music Enthusiasts [City
            Name] is abuzz with excitement as preparations are in full swing for
            the highly anticipated International Piano Festival, set to take
            place from [Dates]. This prestigious event, known for showcasing
            world-class pianists and celebrating the beauty of piano music,
            promises to captivate audiences with its exceptional lineup and
            enchanting performances. Now in its [Xth] edition, the International
            Piano Festival has firmly established itself as a prominent cultural
            event on the global music calendar. Renowned pianists from around
            the world will gather in [City Name] to present a series of
            recitals, chamber music concerts, and masterclasses, ensuring an
            unforgettable experience for music enthusiasts.
          </p>
        </div>
        <div>
          <h3 className="text-3xl mb-4">Festival of Flutes</h3>
          <p>
            International Piano Festival Set to Dazzle Music Enthusiasts [City
            Name] is abuzz with excitement as preparations are in full swing for
            the highly anticipated International Piano Festival, set to take
            place from [Dates]. This prestigious event, known for showcasing
            world-class pianists and celebrating the beauty of piano music,
            promises to captivate audiences with its exceptional lineup and
            enchanting performances. Now in its [Xth] edition, the International
            Piano Festival has firmly established itself as a prominent cultural
            event on the global music calendar. Renowned pianists from around
            the world will gather in [City Name] to present a series of
            recitals, chamber music concerts, and masterclasses, ensuring an
            unforgettable experience for music enthusiasts.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
