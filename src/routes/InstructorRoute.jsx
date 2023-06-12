import { Navigate, useLocation } from 'react-router';
import useAuth from '../hooks/useAuth';
import useInstructor from '../hooks/useInstructor';

const InstructorRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  const [instructor, isLoading] = useInstructor();

  if (loading || isLoading) {
    return <progress className="progress w-56"></progress>;
  }

  if (user && instructor) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default InstructorRoute;
