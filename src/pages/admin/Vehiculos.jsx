import React, { useEffect, useState } from 'react';
import 'styles/styles.css';

const Vehiculos = () => {
  // const funcionPrueba = () => {
  //   return console.log('Hola mundo');
  // } 
  // useEffect( funcionPrueba(), [] );

  //Otra opcion es:
  useEffect( () => {
    return console.log('Hola soy un useEffet que se ejecuta una unica vez cuando la pagina se renderiza por que tiene el array de dependecias vacío');
  } ,[]);

  // useState [ get , set]
  const [nombreVehiculo, setNombreVehiculo] = useState('Chevete');
  const [marcaVehiculo, setMarcaVehiculo] = useState('2');
  const [modeloVehiculo, setModeloVehiculo] = useState(true);

  const cambioNombre = (e) => {
    setNombreVehiculo(e.target.value);
  }

  const enviarDatosAlBackend = () => {
    console.log(`concatenados: ${nombreVehiculo} ${marcaVehiculo} ${modeloVehiculo}`);
  }

  useEffect( () => {
    console.log('Esto es una funcion que se ejecuta cada que cambia la variable de nombre del vehiculo: ', nombreVehiculo);
  }, [nombreVehiculo]);

    return (
    <div className='flex w-full justify-center bg-gray-200 mb-10'>
      <form className='w-92 mt-10'>
        <input onChange={cambioNombre} value={nombreVehiculo} type="text" placeholder='Nombre del vehiculo'/>
        <input onChange={ (e) => {setMarcaVehiculo(e.target.value);}} type="text" placeholder='Marca del vehiculo'/>
        <input onChange={(e) => {setModeloVehiculo(e.target.value);}} type="text" placeholder='Modelo'/>
        <div className='flex justify-center mt-10'>
          <button type='button' onClick={enviarDatosAlBackend} className='bg-indigo-500 text-white p-4 rounded-xl justify-center'>Enviar Datos</button>
        </div>
        <h1>{nombreVehiculo}</h1>
        <h2>{marcaVehiculo}</h2>
        <h3>{modeloVehiculo}</h3>
      </form>
    </div>
  )
}

export default Vehiculos;