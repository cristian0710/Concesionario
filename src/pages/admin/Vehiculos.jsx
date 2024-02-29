import React, { useEffect, useState, useRef } from 'react';
import 'styles/styles.css';
import img_iconoMas from 'media/img_iconoMas.svg';
//Libreria de react-toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

  const autosBackend = [
    {
      nombre: 'Toyota',
      marca: 'Corolla',
      modelo: 2009
    },
    {
      nombre: 'Mazda',
      marca: 'mazda2',
      modelo: 2015
    },
    {
      nombre: 'Renoult',
      marca: 'R12',
      modelo: 1978
    },
    {
      nombre: 'BMW',
      marca: 'A5',
      modelo: 2015
    },
    {
      nombre: 'Toyota',
      marca: 'TXL',
      modelo: 2020
    },
    {
      nombre: 'Ferrari',
      marca: 'Murcielago',
      modelo: 2021
    }
  ]


const Vehiculos = () => {

  // const funcionPrueba = () => {
  //   return console.log('Hola mundo');
  // } 
  // useEffect( funcionPrueba(), [] );

  //Otra opcion es:
  useEffect( () => {
    return console.log('Hola soy un useEffet que se ejecuta una unica vez cuando la pagina se renderiza por que tiene el array de dependecias vacío');
  } ,[]);

  useEffect( () => {
  }, []);

  //useRef
  const formulario = useRef(null);

  // useState [ get , set]
  const [nombreVehiculo, setNombreVehiculo] = useState("");
  const [marcaVehiculo, setMarcaVehiculo] = useState("");
  const [modeloVehiculo, setModeloVehiculo] = useState("");
  const [mostrarTabla, setMostarTabla] = useState(false);
  const [vehiculosList, setVehiculosList] = useState([]);

  useEffect( () => {
    //Obtener lista de vehiculos
    setVehiculosList(autosBackend);
  }, []);

  const cambioNombre = (e) => {
    setNombreVehiculo(e.target.value);
  }

  // Funcion cuando no se utiliza submit en el boton del formulario
  // const enviarDatosAlBackend = () => {
  //   console.log(`concatenados: ${nombreVehiculo} ${marcaVehiculo} ${modeloVehiculo}`);
  //   if(nombreVehiculo === "" || marcaVehiculo === "" || modeloVehiculo === ""){
  //     toast.error('Información incompleta');
  //   }else{
  //     autosBackend.push({nombre: nombreVehiculo, marca: marcaVehiculo, modelo: modeloVehiculo});
  //     toast.success('Vehiculo agregado con exito');
  //   }
  // }

  // Funcion utilizando el submit del formulario
  const submitForm = (e) =>{
    //prevenir el evento que redirige alguna otra parte o pagina
    e.preventDefault();
    //hacer uso del useRef -> trae la información de un formulario
    const formData = new FormData(formulario.current);
    console.log("Datos del form enviados", formData);

    const nuevoVehiculo = {};
    formData.forEach((value, key) => {
      console.log(key, value); //imprime llave valor
      nuevoVehiculo[key] = value;
      console.log(nuevoVehiculo); //imprime llave valor agregado a la lista
    });

    setVehiculosList([...vehiculosList, nuevoVehiculo]);
    toast.success('Vehiculo agregado');
  }

  useEffect( () => {
    console.log('Esto es una funcion que se ejecuta cada que cambia la variable de nombre del vehiculo: ', nombreVehiculo);
  }, [nombreVehiculo]);
  

  return (
    <div className='flex flex-row w-full justify-center bg-gray-200 mb-10 '>
      <form ref={formulario} onSubmit={submitForm} className='w-92 mt-10'>
        <div className='flex justify-between m-10'>
          <div className='flex items-center'>
            <label className='text-3xl text-green-600 font-bold' htmlFor="CrearVehiculo">Crear Vehiculo</label>
          </div>
          {
            mostrarTabla ? <button onClick={() => {setMostarTabla(!mostrarTabla)}} type='button' className=' rounded-xl text-white font-bold w-40 bg-gray-800'>Ocultar Lista</button> : <button onClick={() => {setMostarTabla(!mostrarTabla)}} type='button' className={'bg-green-600  rounded-xl text-white font-bold w-40'}>Ver Lista</button>
          }
        </div>
          <label htmlFor="nombre">
            Nombre del vehiculo
            <input onChange={cambioNombre} value={nombreVehiculo} type="text" name='nombre' placeholder='Nombre del vehiculo' required/>
          </label>
          <label htmlFor="marca">
            Marca del vehiculo 
            <select name="marca" value={marcaVehiculo} onChange={(e) => {setMarcaVehiculo(e.target.value);}} required className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
              <option disabled selected>Seleccione una opción</option>
              <option>Mazda</option>
              <option>Toyota</option>
              <option>Chevrolet</option>
              <option>Renault</option>
              <option>Ford</option>
            </select>
          </label>
          <label htmlFor="modelo">
            Modelo del vehiculo
            <input value={modeloVehiculo} onChange={(e) => {setModeloVehiculo(e.target.value);}} type="number" name='modelo' placeholder='Modelo' min={1992} max={2022} required/>
          </label>
        <div className='flex justify-center mt-10'>
          <button type='submit' className='bg-indigo-500 text-white p-4 rounded-xl justify-center w-1/2 font-bold mb-10'>Agregar Vehiculo</button>
        </div>
        <div className='flex justify-center'>
        {
          mostrarTabla ? <TablaVehiculos props={vehiculosList}/> : () => {setMostarTabla(!mostrarTabla)}
        }
        </div>
        <ToastContainer position="top-right" autoClose={5000} />
        <div className='flex justify-between m-10'>
          <label className='text-3xl text-green-600 font-bold' htmlFor="CrearVehiculo">Crear Vehiculo</label>
          <button type='button' className='flex justify-around items-center bg-green-600  rounded-xl text-white font-bold w-40 h-20'>
            <img className='h-12' src={img_iconoMas} alt="Imagen mas" />
            <label htmlFor="textoBoton">ver mas</label>
          </button>
        </div>
        <h1>{nombreVehiculo}</h1>
        <h2>{marcaVehiculo}</h2>
        <h3>{modeloVehiculo}</h3>
      </form>
    </div>
  )
}

const TablaVehiculos = ({ props }) => {

  useEffect( () => {
    console.log('Este es el estado de vehiculos en el componente de tabla ',props);
  }, [props]);

  return (
    <div>
      <table class="border-collapse border border-slate-500 ...">
        <thead>
          <tr>
            <th class="border border-slate-600 ...">Nombre del vehiculo</th>
            <th class="border border-slate-600 ...">Marca del Vehiculo</th>
            <th class="border border-slate-600 ...">Modelo del Vehiculo</th>
          </tr>
        </thead>
        <tbody>
          {
            props.map( (objetoVehiculo) => {
              return (
                <tr>
                  <td class="border border-slate-700 ...">{objetoVehiculo.nombre}</td>
                  <td class="border border-slate-700 ...">{objetoVehiculo.marca}</td>
                  <td class="border border-slate-700 ...">{objetoVehiculo.modelo}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
    // <table class="border-collapse border border-slate-500 ...">
    //   <thead>
    //     <tr>
    //       <th class="border border-slate-600 ...">State</th>
    //       <th class="border border-slate-600 ...">City</th>
    //     </tr>
    //   </thead>
    //   <tbody>
    //     <tr>
    //       <td class="border border-slate-700 ...">Indiana</td>
    //       <td class="border border-slate-700 ...">Indianapolis</td>
    //     </tr>
    //     <tr>
    //       <td class="border border-slate-700 ...">Ohio</td>
    //       <td class="border border-slate-700 ...">Columbus</td>
    //     </tr>
    //     <tr>
    //       <td class="border border-slate-700 ...">Michigan</td>
    //       <td class="border border-slate-700 ...">Detroit</td>
    //     </tr>
    //   </tbody>
    // </table>
  );
}

export default Vehiculos;