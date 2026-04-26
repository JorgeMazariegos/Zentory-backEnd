const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    const Producto = sequelize.define("producto", {
        id_producto:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        codigo:{
            type: DataTypes.STRING(100),
            unique: true
        },
        nombre:{
            type: DataTypes.STRING(100)
        },
        precio_venta:{
            type: DataTypes.DECIMAL(10, 2)
        },
        stock_minimo:{
            type: DataTypes.INTEGER
        },        
        descripcion:{
            type: DataTypes.TEXT
        }
    });
    return Producto;
};
