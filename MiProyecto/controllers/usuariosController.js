const db = require('../database/models')
const usuario = db.Usuario
const posteo  = db.Posteo
const op = db.Sequelize.Op


const controller = {
    detalleUsuario: function(req, res) {
        let idUsuario = req.params.id;
        usuario.findByPk(idUsuario, {
            include: [
                {association: "usuarioPosteo", 
                include: [{ association: "posteoComentario" }]}
            ]
        })
        .then((resultado)=> {
            // res.send(resultado)
            return res.render('detalleUsuario', {usuario: resultado, usuarioLogueado: true})
        })
        .catch((error)=> {
             return res.send("error");
        });
    },
    miPerfil : function(req,res){
        return res.render('miPerfil', {usuario: data, usuarioLogueado: true})
    },
    editarPerfil : function(req,res){
        return res.render('editarPerfil', {usuario: data, usuarioLogueado: true})
    }
}
module.exports = controller