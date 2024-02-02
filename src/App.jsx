import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './styles/styles.css';
import Index from './pages/Index';
import Login from './pages/Login';
import Register from './pages/Register';
import Admin from './pages/admin/Admin';
import PublicLayout from 'layouts/PublicLayout';
import PrivateLayout from 'layouts/PrivateLayout';
import Clientes from 'pages/admin/Clientes';
import Vehiculos from 'pages/admin/Vehiculos';

const router = createBrowserRouter([
  {
    path: '/',
    element: <PublicLayout ><Index /></PublicLayout>,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/registro',
    element: <Register />
  },
  {
    path: '/admin',
    element: <PrivateLayout ><Admin /></PrivateLayout>,
  },
  {
    path: '/admin/clientes',
    element: <PrivateLayout ><Clientes /></PrivateLayout>,
  },
  {
    path: '/admin/vehiculos',
    element: <PrivateLayout ><Vehiculos /></PrivateLayout>,
  }
]);

function App() {
  return (
    <div>
        <RouterProvider router={router}/>
    </div>
  );
}

export default App;
