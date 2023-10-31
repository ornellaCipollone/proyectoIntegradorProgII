const db = require('../database/models')
const post = db.Posteo
const controller = {
    detallePost : function(req,res){
        let idParams = req.params.id
        post.findByPk(idParams,{
            include: [
                {association: "posteoComentario", 
                 include:[{association: "comentarioUsuario"}]},
                {association: "posteoUsuario"}
            ]
        })
        .then((result)=> {
            //return res.send(result)
            return res.render('detallePost', {post: result, usuarioLogueado: true})
        })
        .catch((error)=> {
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