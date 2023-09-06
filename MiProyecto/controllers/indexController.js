const data = require('../db/modulo-datos')

const controller = {
    index : function(req,res){
        res.render('index')
    },
    detallePost : function(req,res){
        let idParams = req.params.id
        for (let i=0; i<data.posteo.length; i++){
            if (idParams == data.posteo[i].id){
                res.render('detallePost', {post:data.posteo[i]})
            }
        }
        
    },
    detalleUsuario : function(req,res){
        res.render('detalleUsuario')
    },
}
module.exports = controller