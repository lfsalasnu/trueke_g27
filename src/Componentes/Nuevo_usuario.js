import React,{Component} from "react";

class Nuevo_usuario extends Component{
    constructor(){
        super();
        this.state={
            nombres:"",
            apellidos:"",
            correo:"",
            cont1:"",
            cont2:"",
            edad:0,
            pais:"",
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
        console.log(this.state);
        
        
    }

    render(){
        return(
            <div className="card w-50 m-auto bg-dark mt-4 mb-4 border-white">
                <h1 className="m-auto">Nuevo Usuario</h1>
                <form className="card-body">
                    <div className="form-group">
                        <input type="text" name="nombres" className="form-control" onChange={this.cambio} placeholder="Nombres"/>
                    </div>
                    <div className="form-group">
                        <input type="text" name="apellidos" className="form-control mt-3" placeholder="Apellidos"/>
                    </div>
                    <div className="form-group">
                        <input type="email" name="correo" className="form-control mt-3" placeholder="Correo Electrónico"/>
                    </div>
                    <div className="form-group">
                        <input type="number" name="edad" className="form-control mt-3" placeholder="Edad"/>
                    </div>
                    <div className="form-group">
                        <input type="password" name="cont1" className="form-control mt-3" placeholder="Contraseña"/>
                    </div>
                    <div className="form-group">
                        <input type="password" name="cont2" className="form-control mt-3" placeholder="Repetir Contraseña"/>
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