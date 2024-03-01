import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import React, {useEffect, useState} from 'react';
import './styles/styles.css';
import Index from './pages/Index';
import Login from './pages/Login';
import Register from './pages/Register';
import Admin from './pages/admin/Admin';
import PublicLayout from 'layouts/PublicLayout';
import PrivateLayout from 'layouts/PrivateLayout';
import Clientes from 'pages/admin/Clientes';
import Vehiculos from 'pages/admin/Vehiculos';
import AuthLayout from 'layouts/AuthLayout';
import PaginaPrueba from 'pages/PaginaPrueba';
import { DarkModeContext } from 'context/darkMode';


const router = createBrowserRouter([
  {
    path: '/',
    element: <PublicLayout ><Index /></PublicLayout>,
  },
  {
    path: '/login',
    element: <AuthLayout><Login /></AuthLayout>,
  },
  {
    path: '/registro',
    element: <AuthLayout><Register /></AuthLayout>
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
  },
  {
    path: '/pagina_prueba',
    element: <PrivateLayout><PaginaPrueba /></PrivateLayout>
  }
]);

// function App() {
//   return (
//     <div>
//         <RouterProvider router={router}/>
//     </div>
//   );
// }

// Utilizando Context en toda la aplicacion
function App() {
  const [ darkMode, setDarkMode] = useState(false);
  
  useEffect(() => {
    console.log('modo Dark', darkMode);
  }, [darkMode])
  
  return (
    <div>
      <DarkModeContext.Provider value={{darkMode, setDarkMode}}>
        <RouterProvider router={router}/>
      </DarkModeContext.Provider>
    </div>
  );
}

export default App;
