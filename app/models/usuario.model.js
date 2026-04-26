const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    const Usuario = sequelize.define("usuario", {
        id_usuario:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre:{
            type: DataTypes.STRING(100)
        },
        email:{
            type: DataTypes.STRING(100)
        },
        telefono:{
            type: DataTypes.STRING(50)
        },
        rol:{
            type: DataTypes.STRING(50)
        },
        password_hash:{
            type: DataTypes.STRING(200)
        },
        fecha_registro:{
            type: DataTypes.DATE
        },
        estado:{
            type: DataTypes.BOOLEAN
        },
    });
    return Usuario;
};
