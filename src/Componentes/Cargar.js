import React,{Component} from "react";
import Datos from "./Datos.json";
import Articulos from "./Articulos";
class Cargar extends Component{
    constructor(){
        super();
        this.state={Datos};
    }

    render(){
        //console.log(this.state);
        let datos=this.state.Datos.map((dato)=>{
            return(
                <Articulos nombre={dato.nombre} descripcion={dato.descripcion} valor={dato.valor} usuario={dato.usuario} cantidad={dato.cantidad} imagen={dato.imagen}/>
            );
        })
        return(
            <div className="row"></div>
        );

    }
}

export default Cargar;