import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const FeedBack = () => {
  const { id } = useParams();

  const handleFeedback = event => {
    event.preventDefault();
    const feedback = event.target.feedback.value;
    const data = { feedback };
    console.log(data);
    fetch(
      `https://melody-music-school-server.vercel.app/classes/feedback/${id}`,
      {
        method: 'PATCH',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(data),
      }
    )
      .then(res => res.json())
      .then(result => {
        if (result.modifiedCount > 0) {
          Swal.fire({
            icon: 'success',
            title: 'Feedback sent successfully.',
            showConfirmButton: false,
            timer: 1500,
          });
          reset();
        }
      });
  };

  return (
    <div className="mx-auto my-16">
      <form onSubmit={handleFeedback}>
        <textarea
          className="textarea textarea-primary"
          placeholder="Feedback"
          name="feedback"
        ></textarea>
        <button className="btn block">Submit</button>
      </form>
    </div>
  );
};

export default FeedBack;
