const db = require('../database/models')
const post = db.Posteo
const controller = {
    detallePost : function(req,res){
        let idParams = req.params.id
        for (let i=0; i<data.posteo.length; i++){
            if (idParams == data.posteo[i].id){
                return res.render('detallePost', {post: data.posteo[i], usuarioLogueado: true})
            }
        }  
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