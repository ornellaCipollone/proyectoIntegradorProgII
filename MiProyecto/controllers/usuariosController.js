const data = require('../db/modulo-datos')

const controller = {
    detalleUsuario : function(req,res){
        res.render('detalleUsuario', {data: data, usuarioLogueado: true})
    },
    miPerfil : function(req,res){
        res.render('miPerfil', {usuario: data, usuarioLogueado: true})
    },
    editarPerfil : function(req,res){
        res.render('editarPerfil', {usuario: data, usuarioLogueado: true})
    }
}
module.exports = controller