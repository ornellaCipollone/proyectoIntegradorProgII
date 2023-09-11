const data = require('../db/modulo-datos')

const controller = {
    index : function(req,res){
        res.render('index', {usuario: data, usuarioLogueado: false})
    },
    resultados : function(req,res){
        res.render('resultadoBusqueda', {data: data, usuarioLogueado: true})
    },
    register : function(req,res){
        res.render('registracion', {usuarioLogueado: false})
    },
    login : function(req,res){
        res.render('login', {usuarioLogueado: false})
    }
}
module.exports = controller