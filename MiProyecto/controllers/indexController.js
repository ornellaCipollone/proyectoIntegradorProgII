const db = require('../database/models')
const posteo  = db.Posteo
const usuario = db.Usuario
const op = db.Sequelize.Op
const bcrypt = require('bcryptjs')

const controller = {
    index : function(req,res){

        posteo.findAll({
            include: [
                {association: "posteoComentario", 
                 include:[ {association: "comentarioUsuario"}]},
                {association: "posteoUsuario"}
            ]
        })
        .then((datosEncontrados)=> {
            //return res.send(datosEncontrados)
            return res.render('index', {posteo : datosEncontrados, usuarioLogueado: false})

        }).catch((error)=> {
            return res.send(error)

        })        
    },
    resultados : function(req,res){
        let busqueda = req.query.busqueda
        
        usuario.findAll({
            where : [ {nombre : {[op.like] : "%"+busqueda+"%"}}]
        })
        .then((datosEncontrados)=> {
            return res.render('resultadoBusqueda', {usuario: datosEncontrados, usuarioLogueado: true}) 
            // res.send(datosEncontrados)
    })
        .catch((error)=> {
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
        .then((result)=> {
            return res.redirect('/login')
        })
        .catch((error)=> {
            return res.send (error)
        })
    },
    loginPost : function(req,res){
        let emailBuscado = req.body.email
        let pass = req.body.password
        let remember = req.body.rememberme
        let errors= []
   
    usuario.findOne({
        where: [{email:emailBuscado}]
    })
    .then((result)=> {
        let user = result.dataValues;
        console.log(bcrypt.compareSync(pass, user.pass));
       
        if (user != null) {
            let check = bcrypt.compareSync(pass, user.pass);
          
            if (check) {
                req.session.user = user;
                if (remember!=undefined) {
                    res.cookie('userId', user.id_usuario,{maxAge:1000 * 60 * 5})
                }
                return res.redirect('/usuarios/profile')
            }
            else {
                return res.render ('/login')
            }
        }
        else {
            return res.send("no existe usuario con el email:"+ emailBuscado)
        }
    })
    .catch((error)=> {
        return res.send({data:error})
    })
        
    }
}
module.exports = controller