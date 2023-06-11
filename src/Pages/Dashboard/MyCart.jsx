import { FaTrashAlt } from 'react-icons/fa';
import useCart from '../../hooks/useCart';

const MyCart = () => {
  const [cart, refetch] = useCart();
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Price</th>
              <th>Remove</th>
              <th>pay</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {cart.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{item.instrument}</div>
                    </div>
                  </div>
                </td>
                <td>${item.price}</td>
                <td>
                  <button className="btn">
                    <FaTrashAlt></FaTrashAlt>
                  </button>
                </td>
                <th>
                  <button className="btn btn-xs">Pay</button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCart;
