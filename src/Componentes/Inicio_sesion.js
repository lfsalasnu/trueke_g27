import React, { Component } from "react";

class Inicio_sesion extends Component {
    render() {
        return (
            <div className="text-center bg-dark">
                <main className="form-signin w-50 m-auto card bg-dark mt-4 p-4 border-white">
                    <form>
                        <img className="mb-4" src={process.env.PUBLIC_URL+"./Recursos/logo_trueke_l.png"} alt="" width="100" height="auto"/>
                            <h1 className="h3 mb-3 fw-normal">Inicio de Sesión</h1>

                            <div className="form-floating text-dark">
                                <input type="email" className="form-control text-black" id="floatingInput" placeholder="name@example.com"/>
                                    <label for="floatingInput">Usuario</label>
                            </div>
                            <div className="form-floating text-dark">
                                <input type="password" className="form-control" id="floatingPassword" placeholder="Contraseña"/>
                                    <label for="floatingPassword">Contraseña</label>
                            </div>

                            <div className="checkbox mb-3">
                                <label>
                                    <input type="checkbox" value="remember-me"/> Recuerdame
                                </label>
                            </div>
                            <button className="w-50 btn btn-lg btn-primary" type="submit">Iniciar Sesión</button>
                            <p className="mt-5 mb-3 text-muted">Trueke &copy; 2022</p>
                    </form>
                </main>

            </div>
        );
    }
}

export default Inicio_sesion;