import React from 'react'
import { Link } from 'react-router-dom';
import img_concesionario from 'media/img_concesionario.png';
import img_home from 'media/img_home.ico';


const Register = () => {
  return (
    <div>
      <div className='flex flex-row justify-start items-center h-20 px-5 bg-gray-200'>
        <Link to={'/'}>
          <img className='w-10' src={img_home} alt="Imagen home" />
        </Link>
      </div>
      <div className='flex flex-col w-full justify-between items-center'>
        <img className='w-100 mb-10' src={img_concesionario} alt="" />
        <h2 className='m-3 text-center text-3xl font-extrabold text-gray-700'>Inicia sesión en tu cuenta</h2>
        <form action="" className='mt-8 max-w-md'>
          <div className='flex w-full'>
            <label htmlFor="Nombre" className='w-1/2'>Nombre</label>
            <label htmlFor="Apellido">Apellido</label>
          </div>
          <div className='flex w-full'>
            <input type="text" name="nombre" id="nombre" placeholder='Nombre' required/>
            <input type="text" name="apellido" id="apellido" placeholder='Apellido' required/>
          </div>
          <div className='flex w-full pt-4'>
            <label htmlFor="Nombre" className='w-1/2'>Teléfono</label>
            <label htmlFor="Apellido">Fecha de Nacimiento</label>
          </div>
          <div className='flex w-full'>
            <input type="text" name="telefono" id="telefono" placeholder='Telefono' required />
            <input type="date" name="fechaNacimiento" id="fechaNacimiento" required />
          </div>
          <div className='flex w-full pt-4'>
            <label htmlFor="correo" className='w-full'>Correo</label>
          </div>
          <div className='flex w-full'>
            <input type="text" name="correo" id="correo" placeholder='Correo electrónico' required />
          </div>
          <div className='flex w-full pt-4'>
            <label htmlFor="correo" className='w-full'>Contraseña</label>
          </div>
          <div className='flex w-full'>
            <input type="password" name="contraseña" id="contraseña" placeholder='Contraseña' required />
          </div>
          <div className='flex w-full pt-4'>
            <label htmlFor="correo" className='w-full'>Repita la contraseña</label>
          </div>
          <div className='flex w-full'>
            <input type="password" name="contraseña" id="contraseña" placeholder='Repita contraseña' required />
          </div>
          <div className='flex justify-center'>
            <Link to=''>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-80 mt-8">Registrate</button>
            </Link>
          </div>
          <div className='flex justify-between my-8'>
            <div>
              <label htmlFor='recuerdame'>
                ¿Ya tienes cuenta?
              </label>
            </div>
            <div className='text-blue-500 font-bold'>
                <Link to='/login'>
                  Iniciar Sesión
                </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register;