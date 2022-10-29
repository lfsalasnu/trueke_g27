import React, { Component } from "react";

class Tarjetas extends Component {

    eliminar(){
        alert('Eliminando...')
    }
    editar(){
        alert('Editando...')
    }

    render() {
        return (
            <div className="col-sm-4 mt-4">
                <div className="card">
                    <img src={process.env.PUBLIC_URL+this.props.imagen} height="300" width="auto" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.titulo}</h5>
                        <p className="card-text">{this.props.descripcion}</p>
                        <div>
                            <span className="bg bg-primary rounded-pill m-2">Prioridad: {this.props.prioridad}</span>
                            <br/>
                            <span className="bg bg-danger rounded-pill mb-2">Responsable: {this.props.responsable}</span>
                            <br/>
                            <span className="bg bg-success rounded-pill mb-2">Tiempo: {this.props.tiempo} minutos</span>
                        </div>
                        <a href="#" className="btn btn-primary me-3" onClick={this.editar}>Editar</a>
                        <a href="#" className="btn btn-danger" onClick={this.eliminar}>Eliminar</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Tarjetas;