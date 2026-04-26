const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    const Detalle = sequelize.define("detalle", {
        id_detalle:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        id_venta:{
            type: DataTypes.INTEGER,
            references:{
                model: 'venta',
                key: 'id_venta'
            }
        },
        id_producto:{
            type: DataTypes.INTEGER,
            references:{
                model: 'productos',
                key: 'id_producto'
            }
        },
        cantidad:{
            type: DataTypes.INTEGER
        },
        precio_unitario:{
            type: DataTypes.DECIMAL(10, 2)
        },
        subtotal:{
            type: DataTypes.DECIMAL(10, 2)
        },
    });
    return Detalle;
};
