import React, { useEffect, useState } from 'react';
import img_concesionario from 'media/img_concesionario.png';
import { Link, useLocation } from 'react-router-dom';
import miCar from 'media/my_car.png';
import users from '../media/users.png';
import ventas from 'media/ventas.png';
//utilizando responsive
import 'styles/responsive.css';


const Sidebar = () => {
  return (
    // en el clasName se agrega a lo ultimo la clase creada en el archivo css "responsive.css"
    <nav className='w-72 border-r-2 border-gray-700 h-full flex flex-col items-start bg-gray-400 p-4 sidebar'> 
      <div className='flex flex-row w-full justify-center'>
        <Link to='/admin'>
          <img className='w-20 mb-10' src={img_concesionario} alt="" />
        </Link>
      </div>
      <button className='bg-blue-400 w-full text-white font-bold py-2 px-4 rounded mb-4 hover:bg-blue-700'>Perfil</button>
      {/* <div className='flex w-full items-center'>
        <Link to='/admin/vehiculos'>
          <button className='flex justify-center items-center bg-blue-400 w-64 text-white font-bold py-2 px-4 rounded mb-4 hover:bg-blue-700'>
            <img className='w-6 mr-2' src={miCar} alt="mi_carro" />
            Vehiculos
          </button>
        </Link>
      </div>
      <div>
        <Link to='/admin/clientes'>
          <button className='bg-blue-400 w-64 text-white font-bold py-2 px-5 rounded mb-4 hover:bg-blue-700'>Ventas</button>
        </Link>
      </div>
      <Link to='/admin/clientes'>
        <button className='bg-blue-400 w-64 text-white font-bold py-2 px-4 rounded mb-4 hover:bg-blue-700'>Usuarios</button>
      </Link>
      <button className='bg-red-400 w-full text-white font-bold py-2 px-4 rounded mb-4 hover:bg-red-700'>Cerrar Sesión</button> */}
      <Ruta ruta={'/admin/vehiculos'} icono={miCar} nombre={'Vehiculos'}/>
      <Ruta ruta={'/admin/clientes'} icono={users} nombre={'Usuarios'}/>
      <Ruta ruta={'/admin/ventas'} icono={ventas} nombre={'Ventas'}/>
      <div className='flex flex-col h-full w-full justify-end'>
        <button className='bg-red-400 w-full text-white font-bold py-2 px-4 rounded mb-4 hover:bg-red-500'>Cerrar Sesión</button>
      </div>
        
    </nav>
  )
}

const Ruta = ({ruta, icono, nombre}) => {
  const location = useLocation();
  const [isActive, setIsActive] = useState(false);
  
  console.log(isActive);
  console.log(location);

  useEffect(() => {
    // if(location.pathname === ruta){
    if(location.pathname.includes(ruta)){
      setIsActive(true);
    }else{
      setIsActive(false);
    }
    console.log(location, ruta);
  }, [location, ruta]);
  return (
    <div className='flex w-full items-center'>
        <Link to={ruta}>
          {
            isActive ? <button className={`flex justify-center items-center bg-lime-600 w-64 text-white font-bold py-2 px-4 rounded mb-4 `}>
            <img className='w-6 mr-2' src={icono} alt="mi_carro" />
            {nombre}
          </button> : <button className={`flex justify-center items-center bg-blue-700  w-64 text-white font-bold py-2 px-4 rounded mb-4 `}>
            <img className='w-6 mr-2' src={icono} alt="mi_carro" />
            {nombre}
          </button>
          }  
        </Link>
      </div>
  )
}

export default Sidebar;