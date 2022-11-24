import React,{Component} from "react";
import axios from "axios";

class Nuevo_usuario extends Component{
    constructor(){
        super();
        this.state={
            nombres:"",
            apellidos:"",
            usuario:"",
            cont:"",
            cont2:"",
            edad:0,
            ciudad:""            	
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
        //console.log(this.state);
        axios.post('http://localhost:5000/usuarios/nuevo',this.state)
            .then(dato=>console.log(this.state))
        alert("Usuario Guardado")
        document.getElementById("nombres").value=""
        document.getElementById("apellidos").value=""
        document.getElementById("edad").value=""
        document.getElementById("usuario").value=""
        document.getElementById("cont").value=""
        document.getElementById("cont2").value=""

    }

    render(){
        return(
            <div className="card w-50 m-auto bg-dark mt-4 mb-4 border-white">
                <h1 className="m-auto">Nuevo Usuario</h1>
                <form className="card-body">
                    <div className="form-group">
                        <input type="text" name="nombres" id="nombres" className="form-control" onChange={this.cambio} placeholder="Nombres"/>
                    </div>
                    <div className="form-group">
                        <input type="text" name="apellidos" id="apellidos" onChange={this.cambio} className="form-control mt-3" placeholder="Apellidos"/>
                    </div>
                    <div className="form-group">
                        <input type="number" name="edad" id="edad" onChange={this.cambio} className="form-control mt-3" placeholder="Edad"/>
                    </div>
                    <h5 className="text-white mt-4">Ciudad</h5>
                    <div className="form-group">
                        <select className="form-control mt-3" onChange={this.cambio} name="ciudad" id="ciudad">
                            <option>Barranquilla</option>
                            <option>Bogotá</option>
                            <option>Medellín</option>
                            <option>Pereira</option>
                        </select>
                    </div>
                    
                    <div className="form-group">
                        <input type="email" name="usuario" id="usuario" onChange={this.cambio} className="form-control mt-3" placeholder="Correo Electrónico"/>
                    </div>
                    
                    <div className="form-group">
                        <input type="password" name="cont" id="cont" onChange={this.cambio} className="form-control mt-3" placeholder="Contraseña"/>
                    </div>
                    <div className="form-group">
                        <input type="password" name="cont2" id="cont2" onChange={this.cambio} className="form-control mt-3" placeholder="Repetir Contraseña"/>
                    </div>

                    <div className="form-group d-grid gap-2 col-4 mx-auto mt-3">
                        <button className="btn btn-primary" onClick={this.guardar} type="submit">Crear Usuario</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Nuevo_usuario;