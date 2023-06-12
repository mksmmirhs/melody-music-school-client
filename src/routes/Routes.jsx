import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Resister/Register';
import Classes from '../Pages/Classes/Classes';
import Dashboard from '../Layout/Dashboard';
import SelectedClasses from '../Pages/Dashboard/SelectedClasses/SelectedClasses';
import PrivateRoute from './PrivateRoute';
import ManageUsers from '../Pages/Dashboard/ManageUsers/ManageUsers';
import Instructors from '../Pages/Instructors/Instructors';
import AddClass from '../Pages/Dashboard/AddClass/AddClass';
import MyClasses from '../Pages/Dashboard/MyClasses/MyClasses';
import UserHome from '../Pages/Dashboard/UserHome/UserHome';
import AdminRoute from './AdminRoute';
import InstructorRoute from './InstructorRoute';
import ManageClasses from '../Pages/Dashboard/ManageClasses/ManageClasses';
import FeedBack from '../Pages/Dashboard/FeedBack/FeedBack';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: 'login',
        element: <Login></Login>,
      },
      {
        path: 'register',
        element: <Register></Register>,
      },
      {
        path: 'classes',
        element: <Classes></Classes>,
      },
      {
        path: 'instructors',
        element: <Instructors></Instructors>,
      },
    ],
  },
  {
    path: '/dashboard',
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: '/dashboard',
        element: <UserHome></UserHome>,
      },
      {
        path: 'selectedclasses',
        element: <SelectedClasses></SelectedClasses>,
      },
      {
        path: 'manageusers',
        element: (
          <AdminRoute>
            <ManageUsers></ManageUsers>
          </AdminRoute>
        ),
      },
      {
        path: 'manageclasses',
        element: (
          <AdminRoute>
            <ManageClasses></ManageClasses>
          </AdminRoute>
        ),
      },
      {
        path: 'feedback/:id',
        element: (
          <AdminRoute>
            <FeedBack></FeedBack>
          </AdminRoute>
        ),
      },
      {
        path: 'addclass',
        element: (
          <InstructorRoute>
            <AddClass></AddClass>
          </InstructorRoute>
        ),
      },
      {
        path: 'myclasses',
        element: (
          <InstructorRoute>
            <MyClasses></MyClasses>
          </InstructorRoute>
        ),
      },
    ],
  },
]);
export default router;
