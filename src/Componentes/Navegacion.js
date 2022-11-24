import React, { Component } from "react";
import App from "../App";
import DAO_articulos from "./DAO_articulos";
import Formulario from "./Formulario";
import Inicio_sesion from "./Inicio_sesion";
import Nuevo_usuario from "./Nuevo_usuario";

class Navegacion extends Component {
    render() {
        return (
            <div className="bg-dark">
                <ul className="nav nav-tabs nav-pills" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active text-white" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">{this.props.enlace1}</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link text-white" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">{this.props.enlace2}</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link text-white" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">{this.props.enlace3}</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link text-white" id="disabled-tab" data-bs-toggle="tab" data-bs-target="#disabled-tab-pane" type="button" role="tab" aria-controls="disabled-tab-pane" aria-selected="false" >{this.props.enlace4}</button>
                    </li>
                    <form className="d-flex justify-content-end" role="search">
                    <input className="form-control me-2 mt-2 ms-5 justify-content-end" type="search" placeholder="Buscar" aria-label="Search"/>
                        <button className="btn btn-outline-primary me-2 mt-2 ms-2 justify-content-end" type="submit">Buscar</button>
                    </form>
                    <div className="text-primary mt-3 ms-5 text-primary">
                        Luis
                    </div>
                </ul>
                
                
                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active text-white" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
                        {this.props.pest1}
                        <DAO_articulos/>
                    </div>
                    <div className="tab-pane fade text-white" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
                        <Formulario/>
                    </div>
                    <div className="tab-pane fade text-white" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">
                        <Inicio_sesion/>
                    </div>
                    <div className="tab-pane fade text-white" id="disabled-tab-pane" role="tabpanel" aria-labelledby="disabled-tab" tabindex="0">
                        <Nuevo_usuario/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navegacion;