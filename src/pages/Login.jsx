import React from 'react'
import { Link } from 'react-router-dom';
import img_concesionario from 'media/img_concesionario.png';
import img_home from 'media/img_home.ico';
import img_google from '../media/img_google.ico'

const Login = () => {
  return (
    <div>
      <div className='flex flex-row justify-start items-center h-20 px-5 bg-gray-200'>
        <Link to={'/'}>
          <img className='w-10' src={img_home} alt="Imagen home" />
        </Link>
      </div>
      <div className='flex flex-col w-full justify-between items-center'>
        <img className='w-100 mb-10' src={img_concesionario} alt="" />
        <h2 className='m-3 text-center text-3xl font-extrabold text-gray-700'>Crea tu cuenta</h2>
        <form action="" className='mt-8 max-w-md'>
          <div>
            <input className='peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-500 my-8' type="email" name="email" id="email" placeholder='Correo electronico' required/>
            <input className='peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-500 mb-8' type="password" name="password" id="password" placeholder='Contraseña' required/>
          </div>
          <div className='flex justify-between my-8'>
            <div>
              <label htmlFor='recuerdame'>
                <input className='mr-2' type="checkbox" name='recuerdame'/>
                Recuerdame
              </label>
            </div>
            <div className='text-blue-500 font-bold'>
              <Link to=''>
                Olvidaste tu contraseña
              </Link>
            </div>
          </div>
          <div>
            <Link to=''>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-full">Iniciar Sesión </button>
            </Link>
          </div>
          <div className='flex justify-between my-8'>
            <div>
              <label htmlFor='recuerdame'>
                ¿No tienes cuenta?
              </label>
            </div>
            <div className='text-blue-500 font-bold'>
                <Link to='/registro'>
                  Registrate
                </Link>
            </div>
          </div>
          <div className='flex justify-center my-8'>
            ------------------------  ó  --------------------------
          </div>
          <div className='pb-48'>
          <button class="bg-white flex justify-center items-center hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow w-full">
            <img src={img_google} alt="Imagen de Google" className='mr-4' />
            Iniciar con Google
          </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login;