const data = require('../db/modulo-datos')

const controller = {
    index : function(req,res){
        res.render('index')
    },
    detallePost : function(req,res){
        res.render('detallePost')
    },
    detalleUsuario : function(req,res){
        res.render('detalleUsuario')
    },
}
module.exports = controller