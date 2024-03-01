import { useDarkMode } from 'context/darkMode';
import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { darkMode, setDarkMode } = useDarkMode();
  return (
    <nav className='bg-red-400'>
      <ul className='flex w-full justify-between my-3 p-5'>
        <li>Logo</li>
        <li><button onClick={() => {setDarkMode(!darkMode);}} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>{darkMode ? "Desactivar " : "Activar "}Modo Dark</button></li>
        <li>Navegacion 2</li>
        <li>Navegacion 3</li>
        <li className='px-3'>
          <Link to='/login'>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
              Iniciar sesión
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;