import React, { useEffect, useState } from 'react';


const PaginaPrueba = () => {
    const [edad, setEdad] = useState(0);
    const [esMenorEdad, setEsmenorEdad] = useState(false);
    const [mostrarCamposAdicionales, setMostrarCamposAdicionales] = useState(false);

    useEffect(() => {
        if(edad >= 18){
            setEsmenorEdad(true)
        }else{
            setEsmenorEdad(false);
        }
    }, [edad])

    return (
        <div className='flex flex-row w-full justify-center bg-gray-200 mb-10'>
            <form className='w-92 mt-10'>
                <h1 className='flex justify-center'>Formulario de Prueba</h1>
                <label className='mr-8' htmlFor="edad">Por favor ingrese su edad</label>
                <input onChange={(e) => {setEdad(e.target.value)}} type="number" placeholder='edad'/>
                <input  type="text" placeholder='Edad'/>
                <div className='flex justify-center mt-10'>
                <button type='button' onClick={() => {setMostrarCamposAdicionales(!mostrarCamposAdicionales)}} className='bg-indigo-500 text-white py-4 px-10 rounded-xl justify-center font-bold text-lg'>Enviar</button>
                </div>
                <div>{edad}</div>
                <label htmlFor="textoEdad">
                    {
                        esMenorEdad ? <span className='text-3xl text-green-600'>¡Usted es mayor de ead, puede registrarse!</span> : <span className='text-3xl text-red-600'>¡Usted es mayor de ead, no puede registrarse!</span>
                    }
                </label>
                {
                    mostrarCamposAdicionales && (
                        <div>
                            <input className='border bg-gray-400 my-2 p-3' type="text" />
                            <input className='border bg-gray-400 my-2 p-3' type="text" />
                            <input className='border bg-gray-400 my-2 p-3' type="text" />
                            <input className='border bg-gray-400 my-2 p-3' type="text" />
                        </div>
                    )
                }
            </form>
        </div>
    )
}

export default PaginaPrueba;