const mongoose=require('mongoose')

const esquema=mongoose.Schema({
    nombres:String,
    apellidos:String,
    edad:Number,
    ciudad:String,
    usuario:String,
    cont:String
})

const Esquema_usr=mongoose.model('usuarios',esquema)

module.exports=Esquema_usr