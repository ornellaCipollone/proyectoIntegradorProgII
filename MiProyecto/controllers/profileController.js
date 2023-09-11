const data = require('../db/modulo-datos')

const controller = {
    index : function(req,res){
        res.render('miPerfil',{usuario:data})
    },
    editar : function(req,res){
        res.render('editarPerfil',{usuario:data})
    }
}
module.exports = controller