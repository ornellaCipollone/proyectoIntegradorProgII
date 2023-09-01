const data = require('../db/modulo-datos')

const controller = {
    index : function(req,res){
        res.render('miPerfil')
    },
    editar : function(req,res){
        res.render('editarPerfil')
    }
}
module.exports = controller