const db = require('../database/models')
const post = db.Posteo
const controller = {
    detallePost : function(req,res){
        let idParams = req.params.id
        post.findByPK(idParams,{
            include: [
                {association: "posteoComentario", 
                 include:[ {association: "comentarioUsuario"}]},
                {association: "posteoUsuario"}
            ]
        })
        .then(function(result){
            return res.render('detallePost', {post: result, usuarioLogueado: true})
        })
        .catch(function(error){
            return res.send(error)
        }) 
    },
    agregarPost : function(req,res){
        return res.render('agregarPost', {usuarioLogueado: true})
    },
    procesarPost : function(req,res){
        post.create({
            nom :  req.body.imagen,
            pie : req.body.pie
        })
       // res.send(req.body)
        return res.redirect('/index')
    }
}
module.exports = controller