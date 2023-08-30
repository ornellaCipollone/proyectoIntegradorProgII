const data = require('../data/modulo-datos')

const controller = {
    register : function(req,res){
        res.render('registracion',{usuario:data})
    }

}