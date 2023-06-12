import { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const MyClasses = () => {
  const [myClasses, setMyClasses] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    fetch(`http://localhost:5000/myclasses?email=${user.email}`)
      .then(res => res.json())
      .then(data => {
        setMyClasses(data);
      });
  }, []);
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Status</th>
              <th>Enrolled Students</th>
              <th>Feedback</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {myClasses.map((classes, index) => (
              <tr key={classes._key}>
                <td>{index + 1}</td>
                <td>{classes.instrument}</td>
                <td>{classes.class_status}</td>
                <td>{classes.students}</td>
                <td>{classes.feedback ? classes.feedback : <></>}</td>
                <td>
                  <button className="btn">Update</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyClasses;
