import { Navigate, useLocation } from 'react-router';
import useAuth from '../hooks/useAuth';
import useAdmin from '../hooks/useAdmin';

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  const [admin, isLoading] = useAdmin();

  if (loading || isLoading) {
    return <progress className="progress w-56"></progress>;
  }

  if (user && admin) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
