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

        let idUsuarioLogueado = req.session.user.id_usuario;
        usuario.findByPk(idUsuarioLogueado,{
            include : [{association : "usuarioPosteo"}]
            
        })
        .then(function(result){
            return res.render('miPerfil',{usuario:result})
        })
        .catch(function(error){
            return res.send(error)
        })
        
       
    },
    editarPerfil : function(req,res){
        
        if (req.session.user != undefined){
        return res.render('editarPerfil', {usuario: req.session.user, usuarioLogueado: true})
        }
        else {
            return res.render('login')
        }
    },
    editStore : function(req,res){
        if (req.session.user != undefined) {
        usuario.update({
            nombre : req.body.Name,
            pass : bcrypt.hashSync(req.body.password),
            fecha_nac : req.body.fecha
        },
        { where : { id : req.session.user.id_usuario}}
        )
        .then(function(result){
            return res.redirect('/')
        })
        .catch(function(error){
            return res.send(error)
        })
    }
        else {
            return res.redirect('/login')
        }
}
}
module.exports = controller