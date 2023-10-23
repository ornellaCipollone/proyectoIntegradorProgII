const db = require('../database/models')
const posteo  = db.Posteo

const controller = {
    index : function(req,res){

        posteo.findAll({
            include: [
                {association: "posteoComentario", 
                 include:[ {association: "comentarioUsuario"}]},
                {association: "posteoUsuario"}
            ]
        })
        .then(function (datosEncontrados) {
            // return res.send(datosEncontrados)
            return res.render('index', {posteo : datosEncontrados, usuarioLogueado: false})

        }).catch(function (error) {
            res.send(error)

        })        
    },
    resultados : function(req,res){
        res.render('resultadoBusqueda', {data: data, usuarioLogueado: true})
    },
    register : function(req,res){
        res.render('registracion', {usuarioLogueado: false})
    },
    login : function(req,res){
        res.render('login', {usuarioLogueado: false})
    }
}
module.exports = controller