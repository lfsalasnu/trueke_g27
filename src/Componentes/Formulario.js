import React,{Component} from "react";

class Formulario extends Component{
    constructor(){
        super();
        this.state={
            titulo:"",
            descripcion:"",
            prioridad:"Alta",
            responsable:"",
            tiempo:0,
            imagen:""            	
        }
        this.guardar = this.guardar.bind(this);
        this.cambio = this.cambio.bind(this);
    }

    cambio(e){
        //console.log(e.target.name, e.target.value)
        const {name,value}=e.target;
        console.log(name,value);
        this.setState({
            [name]:value
         })
         console.log(this.state);
    }

    guardar(e){
        e.preventDefault();
        console.log(this.state);
        
        
    }

    render(){
        return(
            <div className="card w-50 m-auto">
                <h1 className="m-auto">Nueva Tarjeta</h1>
                <form className="card-body">
                    <div className="form-group">
                        <input type="text" name="titulo" className="form-control" onChange={this.cambio} placeholder="Titulo Tarjeta"/>
                    </div>
                    <div className="form-group">
                        <input type="text" name="descripcion" className="form-control mt-3" placeholder="Descripción Tarjeta"/>
                    </div>
                    <div className="form-group">
                        <input type="text" name="responsable" className="form-control mt-3" placeholder="Responsable Tarjeta"/>
                    </div>
                    <div className="form-group">
                        <input type="number" name="tiempo" className="form-control mt-3" placeholder="Tiempo en minutos"/>
                    </div>
                    <div className="form-group">
                        <input type="text" name="imagen" className="form-control mt-3" placeholder="Imagen Tarjeta (carpeta recursos)"/>
                    </div>
                    <div className="form-group">
                        <select className="form-control mt-3" name="prioridad">
                            <option>Baja</option>
                            <option>Media</option>
                            <option>Alta</option>
                        </select>
                    </div>
                    <div className="form-group d-grid gap-2 col-4 mx-auto mt-3">
                        <button className="btn btn-primary" onClick={this.guardar} type="submit">Guardar</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Formulario;