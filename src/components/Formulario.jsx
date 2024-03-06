
import { useState, useEffect } from "react"
import MsjError from "./MsjError"


function Formulario ({ clientes, setClientes, cliente, setCliente }) {

    const [empresa, setEmpresa] = useState ('');
    const [usuario, setUsuario] = useState ('');
    const [email, setEmail] = useState ('');
    const [fecha, setFecha] = useState ('');
    const [solicitud, setSolicitud] = useState ('');

    //Detecta campos vacíos
    const [error, setError] = useState(false);

    useEffect( () => {
        if (clientes.length > 0){
            setEmpresa(cliente.empresa)
            setUsuario(cliente.usuario)
            setEmail(cliente.email)
            setFecha(cliente.fecha)
            setSolicitud(cliente.solicitud)
        } 
    }, [cliente] )


    const generarId = () => {
        const random = Date.now().toString(36);

        return random;
    }

     //Envío de formulario
    const handleSubmit = (e) => {
        e.preventDefault();

        //Validación de formulario
        if( [ empresa, usuario, email, fecha, solicitud ].includes('') ) {
            console.log('Hay campos vacíos')

            setError(true);
            return;
        } 
            
        setError(false);

        //Objeto de cliente nuevo
        const objetoCliente = {
            empresa, 
            usuario, 
            email, 
            fecha, 
            solicitud
        }

        if (cliente.id) {
            // Editando el registro
            objetoCliente.id = cliente.id
            const clientesActualizados = clientes.map( clienteState => clienteState.id === cliente.id ? objetoCliente : clienteState )

            setClientes(clientesActualizados)
            setCliente({})

        } else {
            // Nuevo registro
            objetoCliente.id = generarId();
            setClientes([...clientes, objetoCliente]);
        }


        //Reiniciar formulario
        setEmpresa('');
        setUsuario('');
        setEmail('');
        setFecha('');
        setSolicitud('');

    };


    return (
        <div className="md:w-1/2 lg:w-2/5 mx-5">
            <h2 className="font-black text-3xl text-center">Registro</h2>

            <p className="text-lg mt-5 text-center mb-10">
            Añade una 
            <span className="text-indigo-600 font-bold"> nueva solicitud </span>
            </p>

            <form 
                onSubmit= {handleSubmit}
                className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"> 
                    
                    <div className="mb-5">
                        <label htmlFor="empresa" 
                        className="block text-gray-700 uppercase font-semibold">
                            Nombre Empresa  </label>

                    <input 
                    id="empresa"
                    type="text" 
                    placeholder=" p. ej. Google"
                    className="border-2 w-full p-2 mt-2 placeholder:bg-opacity-30 rounded-md"
                    value={empresa}
                    onChange={ (e) => setEmpresa(e.target.value) }
                    />

                </div>

                <div className="mb-5">
                    <label htmlFor="usuario" 
                    className="block text-gray-700 uppercase font-semibold">
                        Nombre Usuario  </label>

                    <input 
                    id="usuario"
                    type="text" 
                    placeholder=" p. ej. Pedro Picapiedra"
                    className="border-2 w-full p-2 mt-2 placeholder:bg-opacity-30 rounded-md"
                    value={usuario}
                    onChange={ (e) => setUsuario(e.target.value) }
                    />

                </div>

                <div className="mb-5">
                    <label htmlFor="email" 
                    className="block text-gray-700 uppercase font-semibold">
                        Email  </label>

                    <input 
                    id="email"
                    type="email" 
                    placeholder=" p. ej. pedro@gmail.com"
                    className="border-2 w-full p-2 mt-2 placeholder:bg-opacity-30 rounded-md"
                    value={email}
                    onChange={ (e) => setEmail(e.target.value) }
                    />

                </div>


                <div className="mb-5">
                    <label htmlFor="fecha" 
                    className="block text-gray-700 uppercase font-semibold">
                        Fecha  </label>

                    <input 
                    id="fecha"
                    type="date" 
                    className="border-2 w-full p-2 mt-2 placeholder:bg-opacity-30 rounded-md"
                    value={fecha}
                    onChange={ (e) => setFecha(e.target.value) }
                    />

                </div>

                <div className="mb-5">
                    <label htmlFor="comentarios" 
                    className="block text-gray-700 uppercase font-semibold">
                        Solicitud  </label>

                    <textarea 
                    id="comentarios"
                    type="text" 
                    placeholder=" Describe la solicitud del empresa"
                    className="border-2 w-full p-2 mt-2 placeholder:bg-opacity-30 rounded-md"
                    value={solicitud}
                    onChange={ (e) => setSolicitud(e.target.value) }
                    />

                </div>

                { error && <MsjError message='*Todos los campos son obligatorios' /> }  

                <input 
                id="enviar"
                type="submit" 
                className="w-full bg-indigo-600 text-white font-bold uppercase hover:bg-indigo-900 cursor-pointer transition-all py-3 rounded-md"
                value= { cliente.id ? 'Editar solicitud' : 'Registrar'}
                />


            </form>


        </div>
    )
}

export default Formulario;

