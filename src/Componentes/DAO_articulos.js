import { useState } from "react"
import Articulos from "./Articulos"

const DAO_articulos=()=>{
    
    const [todo,settodo]=useState([])
    
    const datos_bd=()=>{
        fetch('http://localhost:5000/articulos/todo')
            .then(res=>res.json())
            .then(datos=>settodo(datos))
    }

    datos_bd()
    let mostrar=todo.map(dato=>{
        return(
            <Articulos nombre={dato.nombre} descripcion={dato.descripcion} valor={dato.valor} usuario={dato.usuario} cantidad={dato.cantidad} imagen={dato.imagen} id={String(dato._id)}/>
        )
    })
    return(
        <div className="row">
            {mostrar}
        </div>
        
    )
}

export default DAO_articulos