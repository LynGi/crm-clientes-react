import FichaCliente from "./FichaCliente"

const Clientes = ({ clientes, setCliente, eliminarCliente }) => {


  return (

    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll mx-5">
        
      { clientes && clientes.length ? (

        <div>

        <h2 className="font-black text-3xl text-center">Seguimiento de Clientes</h2>

        <p className="text-lg mt-5 text-center mb-10">
            <span className="text-indigo-600 font-bold"> Gestiona las solicitudes </span> de tus clientes
        </p>

        { clientes.map( cliente => (

          <FichaCliente 
              key={cliente.id}
              cliente={cliente}
              setCliente={setCliente}
              eliminarCliente={eliminarCliente}
          />

        ))}

        </div>

    ) : (

        <div>

            <h2 className="font-black text-3xl text-center">Aún no hay registro de clientes</h2>

            <p className="text-lg mt-5 text-center mb-10">
                <span className="text-indigo-600 font-bold"> Añade nuevas solicitudes y las verás </span> aquí.
            </p>

        </div>


    )}

    </div>
  )
}

export default Clientes




