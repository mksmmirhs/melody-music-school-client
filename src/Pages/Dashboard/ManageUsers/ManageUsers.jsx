import { useQuery } from '@tanstack/react-query';

const ManageUsers = () => {
  const { data: users = [], refetch } = useQuery(['users'], async () => {
    const res = await fetch('http://localhost:5000/users');
    return res.json();
  });

  const handleMakeAdmin = id => {
    fetch(`http://localhost:5000/users/admin/${id}`, {
      method: 'PATCH',
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount > 0) {
          refetch();
        }
      });
  };

  const handleMakeInstructor = id => {
    fetch(`http://localhost:5000/users/instructor/${id}`, {
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
              <th>Name</th>
              <th>Email</th>
              <th>Make Admin</th>
              <th>Make Instructor</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={user.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{user.name}</div>
                    </div>
                  </div>
                </td>
                <td>{user.email}</td>
                <td>
                  {user.role === 'admin' ? (
                    'Admin'
                  ) : (
                    <button
                      className="btn btn-xs"
                      onClick={() => handleMakeAdmin(user._id)}
                    >
                      Make Admin
                    </button>
                  )}
                </td>
                <td>
                  {user.role === 'instructor' ? (
                    'Instructor'
                  ) : (
                    <button
                      className="btn btn-xs"
                      onClick={() => handleMakeInstructor(user._id)}
                    >
                      Make Instructor
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
