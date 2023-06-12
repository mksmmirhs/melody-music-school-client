import { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useInstructor from '../../hooks/useInstructor';
import useAdmin from '../../hooks/useAdmin';

const ClassCard = ({ course }) => {
  const [btnState, setBtnState] = useState(false);
  const [bgColour, setBgColour] = useState('bg-base-100');
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [isInstructor] = useInstructor();
  const [isAdmin] = useAdmin();
  const { _id, instrument, image, students, seats, price, instructor } = course;

  useEffect(() => {
    if (course.seats - course.students === 0) {
      setBtnState(true);
      setBgColour('bg-red-100');
    } else if (isAdmin || isInstructor) {
      setBtnState(true);
    }
  }, [course.seats, course.students, isAdmin, isInstructor]);

  const handleAddToCart = () => {
    const cartItem = {
      classID: _id,
      instrument,
      image,
      price,
      email: user.email,
    };
    if (user) {
      fetch('https://melody-music-school-server.vercel.app/carts', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(cartItem),
      })
        .then(res => res.json())
        .then(data => {
          if (data.insertedId) {
            Swal.fire({
              icon: 'success',
              title: 'Item added to cart.',
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: 'Please login to add to cart',

        icon: 'warning',
        showCancelButton: false,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Login',
      }).then(result => {
        if (result.isConfirmed) {
          console.log(location);
          navigate('/login', { state: { from: location } });
        }
      });
    }
  };

  return (
    <div>
      <div className={`card w-96 ${bgColour} shadow-xl`}>
        <figure>
          <img src={course.image} className="h-[180px]" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{instrument}</h2>
          <p>Instructor name: {instructor.name}</p>
          <p>Available seats: {seats - students}</p>
          <p>Price:${price}</p>
          <div className="card-actions justify-end">
            <button
              onClick={handleAddToCart}
              disabled={btnState}
              className="btn btn-primary"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
