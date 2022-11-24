const express= require('express')

const rutas_usr=express.Router()

const Esquema_usr=require('../Esquema_usuarios')

rutas_usr.post('/nuevo',(req,res)=>{
    let body=req.body

    let guardar=new Esquema_usr({
        nombres:body.nombres,
        apellidos:body.apellidos,
        edad:body.edad,
        ciudad:body.ciudad,
        usuario:body.usuario,
        cont:body.cont
    })

    guardar.save((err,guardardb)=>{
        if(err){
            res.send(err)
        }
        else{
            res.send("<h1>Dato Guardado</h1>")
            guardardb
        }
    })
    //res.json(body)
})

rutas_usr.get('/todo',(req,res)=>{
    Esquema_usr
        .find({})
        .then(datos=>res.json(datos))
})

rutas_usr.get('/eliminar/:id',(req,res)=>{
    let {id}=req.params
    Esquema
        .findByIdAndDelete(id)
        .then(res.send("Elemento Borrado"))
})

rutas_usr.post('/actualizar',(req,res)=>{
    let body=req.body
    Esquema_usr.updateOne({nombres:body.nombres},{
        $set:{
            edad:body.cantidad,
            ciudad:"no hay ciudad"
        }
    },function(error,info){
        if(error){
            res.send('error')
        }
        else{
            res.json({info})
        }
    })
})



module.exports=rutas_usr