const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    const Venta = sequelize.define("venta", {
        id_venta:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        id_usuario:{
            type: DataTypes.INTEGER,
            references:{
                model: 'usuarios',
                key: 'id_usuario'
            }
        },
        fecha_venta:{
            type: DataTypes.DATE
        },
        total:{
            type: DataTypes.DECIMAL(10, 2)
        },
        descuento:{
            type: DataTypes.INTEGER
        },
        impuesto:{
            type: DataTypes.INTEGER
        },
    });
    return Venta;
};
