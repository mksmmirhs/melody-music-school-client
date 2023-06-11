import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Resister/Register';
import Classes from '../Pages/Classes/Classes';
import Dashboard from '../Layout/Dashboard';
import MyCart from '../Pages/Dashboard/MyCart';
import PrivateRoute from './PrivateRoute';
import ManageUsers from '../Pages/Dashboard/ManageUsers/ManageUsers';
import Instructors from '../Pages/Instructors/Instructors';
import AddClass from '../Pages/Dashboard/AddClass/AddClass';
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
    path: 'dashboard',
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: 'mycart',
        element: <MyCart></MyCart>,
      },
      {
        path: 'manageusers',
        element: <ManageUsers></ManageUsers>,
      },
      {
        path: 'addclass',
        element: <AddClass></AddClass>,
      },
    ],
  },
]);
export default router;
