

const FichaCliente = ({ cliente, setCliente, eliminarCliente }) => {

  const { empresa, usuario, email, fecha, solicitud, id } = cliente

  const handleEliminar = () => {
      const respuesta = confirm('¿Deseas eliminar este registro?');

      if (respuesta) {
        eliminarCliente(id)
      }
  }

  return (
        <div className="mx-5 my-10 bg-white shadow-md p-6 rounded-xl ">

            <p className="font-bold text-gray-700 uppercase">  Empresa:
            <span className="font-normal normal-case"> { empresa }</span>
            </p>

            <p className="font-bold text-gray-700 uppercase">  Nombre usuario:
            <span className="font-normal normal-case"> { usuario }</span>
            </p>

            <p className="font-bold text-gray-700 uppercase">  Email:
            <span className="font-normal normal-case"> { email }</span>
            </p>

            <p className="font-bold text-gray-700 uppercase">  Fecha:
            <span className="font-normal normal-case"> { fecha }</span>
            </p>

            <p className="font-bold text-gray-700 uppercase">  Solicitud:
            <span className="font-normal normal-case"> { solicitud } </span>
            </p>

            <div className="flex justify-between mt-5">
              <button 
                type="button"
                className="py-2 px-8 bg-green-600 hover:bg-green-700 text-white font-bold uppercaser rounded-md"
              >Completar</button>
              
              <button 
                type="button"
                className="py-2 px-8 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercaser rounded-md"
                onClick={ () => setCliente(cliente) } //evento con callback
              >Editar</button>

              <button 
                type="button"
                className="py-2 px-8 bg-red-600 hover:bg-red-700 text-white font-bold uppercaser rounded-md" 
                onClick={ handleEliminar }
              >Eliminar</button>
            </div>
    </div>
  )
}

export default FichaCliente




