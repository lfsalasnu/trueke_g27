import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import Pie_pagina from "./Componentes/Pie_pagina";
import Navegacion from './Componentes/Navegacion';
import Encabezado from './Componentes/Encabezado';
import Cargar from './Componentes/Cargar';


// mongodb+srv://trueke:<123456789abcde>@cluster0.py9ltpf.mongodb.net/?retryWrites=true&w=majority

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Encabezado/>
    <Navegacion enlace1="Inicio" pest1={<Cargar/>} enlace2="Crear Articulo" enlace3="Iniciar Sesión" enlace4="Crear Usuario"/>
    {/* <App /> */}
    <Pie_pagina/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
