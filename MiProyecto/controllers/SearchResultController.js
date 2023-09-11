const data = require('../db/modulo-datos')

const controller = {
    resultado : function(req,res){
        res.render('resultadoBusqueda',{data:data})
    },
    
}
module.exports = controller