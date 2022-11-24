const express= require('express')
const app1=express()
const port=5000

const bodyParser=require("body-parser")
app1.use(bodyParser.json())
app1.use(bodyParser.urlencoded({extended:false}))
//Conexión base de datos
const mongoose=require('mongoose')
const cors=require('cors')
app1.use(cors([]))

mongoose
    //.connect('mongodb://localhost:27017/g_27')
    .connect('mongodb+srv://trueke:123456789abcd@cluster0.py9ltpf.mongodb.net/trueke_g27')
    .then(console.log("Conectado a la base de datos"))

const Esquema=require('./Esquema_articulo')


let rutas=require('./router/rutas')
app1.use('/articulos',rutas)

let rutas_usr=require('./router/rutas_usr')
app1.use('/usuarios',rutas_usr)

app1.listen(port,()=>console.log("Servidor Levantado..."))