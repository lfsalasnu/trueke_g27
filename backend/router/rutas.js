const express= require('express')

const rutas=express.Router()

const Esquema=require('../Esquema_articulo')

rutas.post('/nuevo',(req,res)=>{
    let body=req.body

    let guardar=new Esquema({
        nombre:body.nombre,
        descripcion:body.descripcion,
        cantidad:body.cantidad,
        valor:body.valor,
        usuario:body.usuario,
        imagen:body.imagen
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

rutas.get('/todo',(req,res)=>{
    Esquema
        .find({})
        .then(datos=>res.json(datos))
})

rutas.get('/eliminar/:id',(req,res)=>{
    let {id}=req.params
    Esquema
        .findByIdAndDelete(id)
        .then(res.send("Elemento Borrado"))
})

rutas.post('/actualizar2',(req,res)=>{
    let body=req.body
    if(body.nombre!=''){
        Esquema.findByIdAndUpdate(body.id,{
            $set:{
                nombre:body.nombre,
            }
        },function(error,info){
            if(error){
                console.log(error)
            }
            else{
                console.log({info})
            }
        })    
    }
    if(body.descripcion!=''){
        Esquema.findByIdAndUpdate(body.id,{
            $set:{
                descripcion:body.descripcion,
            }
        },function(error,info){
            if(error){
                console.log(error)
            }
            else{
                console.log({info})
            }
        })    
    }
    if(body.cantidad!=0){
        Esquema.findByIdAndUpdate(body.id,{
            $set:{
                cantidad:body.cantidad,
            }
        },function(error,info){
            if(error){
                console.log(error)
            }
            else{
                console.log({info})
            }
        })    
    }
    if(body.valor!=''){
        Esquema.findByIdAndUpdate(body.id,{
            $set:{
                valor:body.valor,
            }
        },function(error,info){
            if(error){
                console.log(error)
            }
            else{
                console.log({info})
            }
        })    
    }
    if(body.imagen!=''){
        Esquema.findByIdAndUpdate(body.id,{
            $set:{
                imagen:body.imagen,
            }
        },function(error,info){
            if(error){
                console.log(error)
            }
            else{
                console.log({info})
            }
        })    
    }
})

rutas.post('/actualizar',(req,res)=>{
    let body=req.body
    Esquema.updateOne({nombre:body.nombre},{
        $set:{
            cantidad:body.cantidad,
            imagen:"no hay imagen"
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



module.exports=rutas