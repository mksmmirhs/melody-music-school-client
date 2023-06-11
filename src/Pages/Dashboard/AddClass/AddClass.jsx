import { json } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Swal from 'sweetalert2';

const AddClass = () => {
  const { user } = useAuth();

  const handleSubmitClass = event => {
    event.preventDefault();
    const form = event.target;
    const instrument = form.name.value;
    const image = form.image.value;
    const students = 0;
    const seats = parseInt(form.seats.value);
    const price = parseFloat(form.price.value);
    const class_status = 'pending';

    const classData = {
      instrument,
      image,
      students,
      seats,
      price,
      class_status,
      instructor: {
        name: user.displayName,
        image: user.photoURL,
        email: user.email,
      },
    };
    fetch('http://localhost:5000/courses', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(classData),
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          Swal.fire({
            icon: 'success',
            title: 'Class added successfully.',
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="my-16 mx-auto">
      <form onSubmit={handleSubmitClass} className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="" className="label">
            Class Name:
          </label>
          <input
            type="text"
            name="name"
            placeholder="Type here"
            className="input input-bordered input-primary w-full max-w-xs "
          />
        </div>
        <div>
          <label htmlFor="" className="label">
            Class Image:
          </label>
          <input
            type="text"
            placeholder="Type here"
            name="image"
            className="input input-bordered input-primary w-full max-w-xs "
          />
        </div>
        <div>
          <label htmlFor="" className="label">
            Instructor name:
          </label>
          <input
            type="text"
            placeholder="Type here"
            name="instructor"
            defaultValue={user.displayName}
            disabled
            className="input input-bordered input-primary w-full max-w-xs "
          />
        </div>
        <div>
          <label htmlFor="" className="label">
            Instructor email:
          </label>
          <input
            type="text"
            placeholder="Type here"
            name="email"
            defaultValue={user.email}
            disabled
            className="input input-bordered input-primary w-full max-w-xs "
          />
        </div>
        <div>
          <label htmlFor="" className="label">
            Available seats:
          </label>
          <input
            type="text"
            placeholder="Type here"
            name="seats"
            className="input input-bordered input-primary w-full max-w-xs "
          />
        </div>
        <div>
          <label htmlFor="" className="label">
            Price:
          </label>
          <input
            type="text"
            placeholder="Type here"
            name="price"
            className="input input-bordered input-primary w-full max-w-xs "
          />
        </div>
        <div>
          <button className="btn">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddClass;
