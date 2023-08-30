const data = require('../data/modulo-datos')

const controller = {
    register : function(req,res){
        res.render('registracion',{usuario:data})
    },
    login : function(req,res){
        res.render('login',{usuario:data})
    },
    miPerfil: function(req,res){
        res.render('registracion',{usuario:data})
    },
    editar : function(req,res){
        res.render('registracion',{usuario:data})
    },
    agregar : function(req,res){
        res.render('registracion',{usuario:data})
    }

}