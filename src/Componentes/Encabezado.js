import React,{Component} from "react";

class Encabezado extends Component{
    render(){
        return(
            <div>
                <img className="mx-auto d-block mt-3 mb-3" height="200" width="auto" src={process.env.PUBLIC_URL+"./Recursos/logo3.png"}/>
            </div>
        );
    }
}

export default Encabezado;