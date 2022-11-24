import React,{Component} from "react";
import axios from "axios";

class Formulario extends Component{
    constructor(){
        super();
        this.state={
            nombre:"",
            descripcion:"",
            valor:"Alto",
            usuario:"",
            cantidad:0,
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
         //console.log(this.state);
    }

    guardar(e){
        e.preventDefault();
        axios.post('http://localhost:5000/articulos/nuevo',this.state)
            .then(dato=>console.log(this.state))
        alert("Articulo guardado")
        document.getElementById("nombre").value=""
        document.getElementById("descripcion").value=""
        document.getElementById("cantidad").value=""
        document.getElementById("imagen").value=""
        document.getElementById("usuario").value=""
        
        
        //console.log(this.state);
        
        
    }

    render(){
        return(
            <div className="card w-50 m-auto bg-dark mt-4 mb-4 border-white">
                <h1 className="m-auto">Nuevo Articulo</h1>
                <form className="card-body">
                    <div className="form-group">
                        <input type="text" id="nombre" name="nombre" className="form-control" onChange={this.cambio} placeholder="Nombre Articulo"/>
                    </div>
                    <div className="form-group">
                        <input type="text" id="descripcion" name="descripcion" className="form-control mt-3" placeholder="Descripción Articulo" onChange={this.cambio}/>
                    </div>
                    <div className="form-group">
                        <input type="text" id="usuario" name="usuario" className="form-control mt-3" placeholder="Usuario" onChange={this.cambio}/>
                    </div>
                    <div className="form-group">
                        <input type="number" id="cantidad" name="cantidad" className="form-control mt-3" placeholder="Cantidad" onChange={this.cambio}/>
                    </div>
                    <div className="form-group">
                        <input type="text" id="imagen" name="imagen" className="form-control mt-3" placeholder="Imagen Tarjeta (carpeta recursos)" onChange={this.cambio}/>
                    </div>
                    <h5 className="text-white mt-4">Valor</h5>
                    <div className="form-group">
                        <select className="form-control mt-3" onChange={this.cambio} name="valor" id="valor">
                            <option>Bajo</option>
                            <option>Medio</option>
                            <option>Alto</option>
                        </select>
                    </div>
                    <div className="form-group d-grid gap-2 col-4 mx-auto mt-3">
                        <button className="btn btn-primary" onClick={this.guardar} type="btn">Crear</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Formulario;