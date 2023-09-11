const data = require('../db/modulo-datos')

const controller = {
    detalleUsuario : function(req,res){
        res.render('detalleUsuario',{data:data})
    },
    miPerfil : function(req,res){
        res.render('miPerfil',{usuario:data})
    },
    editarPerfil : function(req,res){
        res.render('editarPerfil',{usuario:data})
    }
}
module.exports = controller