const data = require('../db/modulo-datos')

const controller = {
    index : function(req,res){
        res.render('index',{usuario:data})
    },
    resultados : function(req,res){
        res.render('resultadoBusqueda',{data:data})
    },
    register : function(req,res){
        res.render('registracion')
    },
    login : function(req,res){
        res.render('login')
    }
}
module.exports = controller