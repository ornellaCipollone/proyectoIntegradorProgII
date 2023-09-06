const data = require('../db/modulo-datos')

const controller = {
    index : function(req,res){
        res.render('miPerfil',{usuario:data})
    },
    editar : function(req,res){
        res.render('editarPerfil',{usuario:data})
    },
    detallePost : function(req,res){
        let idParams = req.params.idParams
        for (let i=0;i<data.posteo.length;i++){
            if (idParams == data.posteo[i].id){
                res.render('detallePost',{post:data.posteo[i]})
            }
        }
    }
}
module.exports = controller