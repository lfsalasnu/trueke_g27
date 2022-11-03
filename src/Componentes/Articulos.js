import React, { Component } from "react";

class Articulos extends Component {

    constructor() {
        super();
        this.state = {
            bot1: <div>
                <a href="#" className="btn btn-primary me-3 mt-2" onClick={this.editar}>Editar</a>
                <a href="#" className="btn btn-danger mt-2" onClick={this.eliminar}>Eliminar</a>
            </div>,
            bot2:<a href="#" className="btn btn-success mt-2" onClick={this.intercambiar}>Intercambiar</a>
            
        }
    }

    intercambiar(){
        alert("Intercambiando...")
    }

    botones(usuario){
        if (usuario==="Luis") {
            return this.state.bot1;
        } else {
            return this.state.bot2;
        }

    }

    eliminar() {
        alert('Eliminando...')
    }
    editar() {
        alert('Editando...')
    }

    render() {
        return (
            <div className="col-sm-4 mt-4 text-center">
                <div className="card bg-dark border-white">
                    <img src={process.env.PUBLIC_URL + this.props.imagen} height="300" width="auto" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.nombre}</h5>
                        <p className="card-text">{this.props.descripcion}</p>
                        <div>
                            <span className="bg bg-primary rounded-pill m-2">Valor: {this.props.valor}</span>
                            <br />
                            <span className="bg bg-danger rounded-pill mb-2">Usuario: {this.props.usuario}</span>
                            <br />
                            <span className="bg bg-success rounded-pill mb-2">cantidad: {this.props.cantidad}</span>
                        </div>
                        {this.botones(this.props.usuario)}
                    </div>
                </div>
            </div>
        );
    }
}

export default Articulos;