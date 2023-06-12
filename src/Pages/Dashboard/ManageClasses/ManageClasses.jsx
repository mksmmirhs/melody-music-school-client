import useClasses from '../../../hooks/useClasses';

const ManageClasses = () => {
  const [allClasses, refetch] = useClasses();

  const handleApprove = id => {
    fetch(`http://localhost:5000/classes/approve/${id}`, {
      method: 'PATCH',
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount > 0) {
          refetch();
        }
      });
  };

  const handleDeny = id => {
    fetch(`http://localhost:5000/classes/deny/${id}`, {
      method: 'PATCH',
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount > 0) {
          refetch();
        }
      });
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Class name</th>
              <th>Instructor name</th>
              <th>Instructor email</th>
              <th>Available seats</th>
              <th>Price</th>
              <th>Status</th>
              <th>Approve</th>
              <th>Deny</th>
              <th>feedback</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {allClasses.map((cls, index) => (
              <tr key={cls._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={cls.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{cls.instrument}</div>
                    </div>
                  </div>
                </td>
                <td>{cls.instructor.name}</td>
                <td>{cls.instructor.email}</td>
                <td>{cls.seats}</td>
                <td>${cls.price}</td>
                <td>{cls.class_status}</td>
                <td>
                  <button
                    onClick={() => handleApprove(cls._id)}
                    className="btn"
                    disabled={cls.class_status === 'pending' ? false : true}
                  >
                    Approve
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleDeny(cls._id)}
                    className="btn"
                    disabled={cls.class_status === 'pending' ? false : true}
                  >
                    Deny
                  </button>
                </td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageClasses;
