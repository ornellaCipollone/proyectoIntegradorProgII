const data = require('../data/modulo-datos')

const controller = {
    register : function(req,res){
        res.render('registracion',{usuario:data.usuario})
    },
    login : function(req,res){
        res.render('login',{usuario:data.usuario})
    },
    miPerfil: function(req,res){
        res.render('miPerfil',{usuario:data})
    },
    editar : function(req,res){
        res.render('editarPerfil',{usuario:data.usuario})
    },
    agregar : function(req,res){
        res.render('agregarPost',{usuario:data})
    }

}
module.exports = controller