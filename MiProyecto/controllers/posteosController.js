const db = require('../database/models')
const controller = {
    detallePost : function(req,res){
        let idParams = req.params.id
        for (let i=0; i<data.posteo.length; i++){
            if (idParams == data.posteo[i].id){
                res.render('detallePost', {post: data.posteo[i], usuarioLogueado: true})
            }
        }  
    },
    agregarPost : function(req,res){
        res.render('agregarPost', {usuarioLogueado: true})
    },
}
module.exports = controller