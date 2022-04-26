import React from 'react'
import shortid from 'shortid'
import Swal from 'sweetalert2'
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

    const eliminarTarea = index => {

        Swal.fire({
            title: '¿Estás seguro?',
            // text: "You won't be able to revert this!",
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: '¡Si!'
        }).then((result) => {

            if (result.isConfirmed) {

                tareas.splice(index, 1)
                // * console.log(tareas)
                setTareas([...tareas])

                Swal.fire(
                    '¡Eliminado!',
                    'La tarea se ha borrado',
                    'Entendido'
                )
            }
        })
        // tareas.splice(index, 1)
        // * console.log(tareas)
        // setTareas([...tareas])
    }

    return (
        <div className='col-12 contenedor-main main'>
            <div className="col-sm-12 col-md-7 col-lg-7 col-xl-7">
                <h2>ListaTareas</h2>
                <div className='contenedor-tarea  p-2 row'>
                    {
                        tareas.map((tarea, index) => {
                            console.log(index)
                            return <div className=' div-tarea row col-12 mb-3 border border-secondary pt-2 pb-5' id={index} key={tarea.id}>
                                <p className='col'>{tarea.task}</p>
                                <button type='button' className='btn btn-warning mr-1 col-1'>Editar</button>
                                <button type='button' className='btn btn-danger col-2' onClick={() => eliminarTarea(index)}>Eliminar</button>
                            </div>
                        })
                    }
                </div>
            </div>
            <form action="" onSubmit={agregarTarea} className='formulario col-sm-12 col-md-4 col-lg-4 col-xl-4'>
                <h2>Formulario</h2>
                <input type="text" placeholder='Ingrese la tarea' className='col-12 p-2' onChange={e => setTarea(e.target.value)} value={tarea} required />
                <button type='submit' className='btn btn-primary col-12 mt-3 p-2'> Agregar</button>
            </form>
        </div>
    )
}

export default Formulario