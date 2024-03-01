import { useDarkMode } from 'context/darkMode'
import React from 'react'

const Index = () => {
  const {darkMode} = useDarkMode();

  return (
    <div className={`w-full h-full bg-gray-${darkMode ? '900' : '50'} text-zinc-${darkMode ? '50' : '900'}`}>Pagina Landing Concesionario</div>
  )
}

export default Index;