const mongoose=require('mongoose')

const esquema=mongoose.Schema({
    nombre:String,
    descripcion:String,
    cantidad:Number,
    valor:String,
    usuario:String,
    imagen:String
})

const Esquema=mongoose.model('datos',esquema)

module.exports=Esquema