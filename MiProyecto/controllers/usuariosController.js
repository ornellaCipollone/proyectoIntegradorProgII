const db = require('../database/models')
const usuario = db.Usuario
const posteo  = db.Posteo
const op = db.Sequelize.Op


const controller = {
    // detalleUsuario : function(req,res){
    //     let idUsuario = req.params.id
    //     usuario.findByPk(idUsuario,{
    //         include : [
    //             {association: "posteoComentario", 
    //              include:[ {association: "comentarioUsuario"}]},
    //             {association: "posteoUsuario"}
    //         ]
    //     })
    //     .then(function(resultado){
    //        // res.render('detalleUsuario', {data: resultado, usuarioLogueado: true})
    //        res.send(resultado)
    //     })
    //     .catch(function(error){
    //         res.send("error")
    //     })
        
    // },
    detalleUsuario: function(req, res) {
        let idUsuario = req.params.id;
        usuario.findByPk(idUsuario, {
            include: [
                { association: "usuarioPosteo", include: [{ association: "posteoComentario" }] }
            ]
        })
        .then(function(resultado) {
            // res.send(resultado)
            res.render('detalleUsuario', {data: resultado, usuarioLogueado: true})
        })
        .catch(function(error) {
            res.send("error");
        });
    },
    miPerfil : function(req,res){
        res.render('miPerfil', {usuario: data, usuarioLogueado: true})
    },
    editarPerfil : function(req,res){
        res.render('editarPerfil', {usuario: data, usuarioLogueado: true})
    }
}
module.exports = controller