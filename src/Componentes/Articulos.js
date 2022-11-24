import axios from "axios";
import React, { Component } from "react";

class Articulos extends Component {

    constructor() {
        super();
        this.state = {
            nombre:"",
            descripcion:"",
            valor:"",
            usuario:"",
            cantidad:0,
            imagen:"" ,
            id:""
        }
        this.eliminar = this.eliminar.bind(this)
        this.cambio = this.cambio.bind(this)
        this.editar = this.editar.bind(this)
    }

    intercambiar() {
        alert("Intercambiando...")
    }

    

    eliminar(e) {
        let borrado = 'http://localhost:5000/articulos/eliminar/' + e.target.name
        axios.get(borrado)

        //console.log('http://localhost:5000/articulos/eliminar/'+e.target.name)

    }

    editar(e) {
        this.setState({
            id:e.target.name
         })
        axios.post('http://localhost:5000/articulos/actualizar2',this.state)
        //alert('Editando...')
    }

    cambio(e){
        
        this.setState({
            [e.target.name]:e.target.value
         })
         console.log(this.state);
         
    }

    render() {
        //this.setState({ id: this.props.id })
        return (
            <div className="col-sm-4 mt-4 text-center">
                <div className="card bg-dark border-white">
                    <img src={this.props.imagen} height="400" width="auto" className="card-img-top" alt="..." />
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
                        <div>
                            <button className="btn btn-primary me-3 mt-2" data-bs-toggle="modal" data-bs-target={"#editar" + this.props.id}>Editar</button>
                            <button type="button" className="btn btn-danger me-3 mt-2" data-bs-toggle="modal" data-bs-target={"#prueba" + this.props.id}> Eliminar</button>
                            <button className="btn btn-success mt-2" onClick={this.intercambiar}>Intercambiar</button>
                        </div>

                        <div className="modal fade" id={"prueba" + this.props.id} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h1 className="modal-title fs-5 text-black" id="exampleModalLabel">Eliminar</h1>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body text-black">
                                        Desea eliminar el registro {this.props.id}?
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                        <button type="button" className="btn btn-danger" name={this.props.id} onClick={this.eliminar}>Eliminar</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Editar */}
                        <div className="modal fade" id={"editar" + this.props.id} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content bg-dark">
                                    <div className="modal-header">
                                        <h1 className="modal-title fs-5" id="exampleModalLabel">Editar articulo</h1>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <form>
                                            <div className="mb-1">
                                                <label for="recipient-name" className="col-form-label">Nombre Articulo</label>
                                                <input type="text" className="form-control" id="recipient-name" name="nombre" defaultValue={this.props.nombre} onChange={this.cambio}/>
                                            </div>
                                            <div className="mb-1">
                                                <label for="message-text" className="col-form-label">Descripción</label>
                                                <textarea className="form-control" id="message-text" name="descripcion" defaultValue={this.props.descripcion} onChange={this.cambio}></textarea>
                                            </div>
                                            <div className="mb-1">
                                                <label for="recipient-name" className="col-form-label">Cantidad</label>
                                                <input type="number" className="form-control" id="recipient-name" name="cantidad" defaultValue={this.props.cantidad} onChange={this.cambio} />
                                            </div>
                                            <div className="mb-1">
                                                <label for="recipient-name" className="col-form-label">Usuario</label>
                                                <input type="text" className="form-control" id="recipient-name" name="usuario" defaultValue={this.props.usuario} onChange={this.cambio} />
                                            </div>
                                            <div className="mb-1">
                                                <label for="recipient-name" className="col-form-label">Imagen</label>
                                                <input type="text" className="form-control" id="recipient-name" name="imagen"  defaultValue={this.props.imagen} onChange={this.cambio}/>
                                            </div>
                                            
                                            <div className="mb-1">
                                            <label for="recipient-name" className="col-form-label">Valor</label>
                                                <select className="form-control mt-3" onChange={this.cambio} name="valor" id="valor" defaultValue={this.props.valor} >
                                                    <option>Bajo</option>
                                                    <option>Medio</option>
                                                    <option>Alto</option>
                                                </select>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Descartar</button>
                                        <button type="button" className="btn btn-success" name={this.props.id} onClick={this.editar}>Actualizar</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Articulos;