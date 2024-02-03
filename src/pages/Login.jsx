import React from 'react'
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className='flex flex-col w-full justify-center items-center'>
      <h2 className='m-3 text-center text-3xl font-extrabold text-gray-700'>Inicia sesión en tu cuenta</h2>
      <form action="" className='mt-8 max-w-md'>
        <div>
          <input className='peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-500 my-8' type="email" name="email" id="email" placeholder='Correo electronico' required/>
          <input className='peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-500 mb-8' type="password" name="password" id="password" placeholder='Contraseña' required/>
        </div>
        <div className='flex justify-between'>
          <div>
            <label htmlFor='recuerdame'>
              <input className='mr-2' type="checkbox" name='recuerdame'/>
              Recuerdame
            </label>
          </div>
          <div>
            <Link to='/'>
              Olvidaste tu contraseña
            </Link>
          </div>
        </div>
        <div>
          <Link to='/admin'>
            <button type='submit'>Iniciar sesion</button>
          </Link>
        </div>
        <div>
          ó
        </div>
        <div>
          <button>Continuá con Google</button>
        </div>
      </form>
    </div>
  )
}

export default Login;