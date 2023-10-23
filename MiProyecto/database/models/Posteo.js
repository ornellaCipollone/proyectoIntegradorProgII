module.exports = function (sequelize, dataTypes) {
    
    let alias = "Posteo";

    let cols = {
        id_posteo: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        nom: {
            type: dataTypes.STRING(50)
        },
        pie: {
            type: dataTypes.STRING(50)
        },
        created_at: {
            type: dataTypes.DATE
        },
        update_at: {
            type: dataTypes.DATE
        },
        delete_at: {
            type: dataTypes.DATE
        }
    };

    let config = {
        tableName: "posteo",
        timestamps: true,
        underscored: true,
    };

    const Posteo = sequelize.define(alias,cols,config);

    Posteo.associate = (models) => {
        Posteo.hasMany(models.Comentario, {
            as: "posteoComentario",
            foreignKey: "id_post"
        });
        Posteo.belongsTo(models.Usuario, {
            as: "posteoUsuario",
            foreignKey: "id_usuario"
        });
    };

    return Posteo;

}