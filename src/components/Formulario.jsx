import React from 'react'
import shortid from 'shortid'
// import ListaTareas from './ListaTareas'

const Formulario = () => {
    const [tarea, setTarea] = React.useState("")
    const [tareas, setTareas] = React.useState([])
    const agregarTarea = e => {
        e.preventDefault()
        // alert(tarea)
        const obj = {
            id: shortid.generate(),
            task: tarea
        }
        setTareas([...tareas, obj])
        setTarea("")
    }
    return (
        <div className='col-12 contenedor-main main'>
            <div className="col-sm-12 col-md-7 col-lg-7 col-xl-7">
                <h2>ListaTareas</h2>
                <div className='contenedor-tarea border border-secondary p-2'>
                    {
                        tareas.map((tarea) => {
                            return <div className=' div-tarea row' key={tarea.id}>
                                <p>{tarea.task}</p>
                                <button type='button' className='btn btn-warning mr-1 col-1'>Editar</button>
                                <button type='button' className='btn btn-danger col-1'>Eliminar</button>
                            </div>
                        })
                    }

                </div>
            </div>
            <form action="" onSubmit={agregarTarea} className='formulario col-sm-12 col-md-4 col-lg-4 col-xl-4'>
                <h2>Formulario</h2>
                <input type="text" placeholder='Ingrese la tarea' className='col-12 p-2' onChange={e => setTarea(e.target.value)} value={tarea} required />
                <button type='submit' className='btn btn-dark col-12 mt-3 p-2'> Agregar</button>
            </form>
        </div>
    )
}

export default Formulario