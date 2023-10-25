const db = require('../database/models')
const posteo  = db.Posteo
const usuario = db.Usuario
const op = db.Sequelize.Op

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
            //return res.send(datosEncontrados)
            return res.render('index', {posteo : datosEncontrados, usuarioLogueado: false})

        }).catch(function (error) {
            return res.send(error)

        })        
    },
    resultados : function(req,res){
        let busqueda = req.query.busqueda
        

        usuario.findAll({
            where : [ {nombre : {[op.like] : "%"+busqueda+"%"}}]
        })
        .then(function(datosEncontrados){
           return res.render('resultadoBusqueda', {usuario: datosEncontrados, usuarioLogueado: true}) 
          // res.send(datosEncontrados)
    })
        .catch(error => {
            return res.send("error")
        })
        
        

    },
    register : function(req,res){
        return res.render('registracion', {usuarioLogueado: false})
    },
    login : function(req,res){
        return res.render('login', {usuarioLogueado: false})
    },
    registerPost : function(req,res){
        
        let user = {
            nombre : req.body.name,
            apellido : req.body.Apellido,
            email : req.body.email,
            pass : bcrypt.hashSync(req.body.password),
            fecha_nac : req.body.Fecha ,
            dni : req.body.dni,
            foto : req.body.foto 
        }
        usuario.create(user)
        .then(function(result){
            return res.redirect('/login')
        })
        .catch(function(error){
            return res.send (error)
        })
    },
    loginPost : function(req,res){
        let emailBuscado = req.body.email
        let pass = req.body.pass
        usuario.findOne({
            where: [{email:emailBuscado}]
        })
        .then(function(result){
            if (result != null) {
                let check = bcrypt.compareSync(pass, result.pass)
                if (check) {
                    return res.redirect('/profile')
                }
                else {
                    return res.render ('/login')
                }
            }
        })
        .catch(function(error){
            return res.send(error)
        })
    }
}
module.exports = controller