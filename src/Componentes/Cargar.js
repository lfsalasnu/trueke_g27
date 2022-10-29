import React,{Component} from "react";
import Datos from "./Datos.json";
import Tarjetas from "./Tarjetas";
class Cargar extends Component{
    constructor(){
        super();
        this.state={Datos};
    }

    render(){
        //console.log(this.state);
        let datos=this.state.Datos.map((dato)=>{
            return(
                <Tarjetas titulo={dato.Titulo} descripcion={dato.Descripcion} prioridad={dato.Prioridad} responsable={dato.Responsable} tiempo={dato.Numero} imagen={dato.imagen}/>
            );
        })
        return(
            <div className="row">{datos}</div>
        );

    }
}

export default Cargar;