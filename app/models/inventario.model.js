const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    const Inventario = sequelize.define("inventario", {
        id_inventario:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        id_producto:{
            type: DataTypes.INTEGER,
            references: {
                model: 'productos',
                key: 'id_producto'
            }
        },
        cantidad_disponible:{
            type: DataTypes.INTEGER
        },
        fecha_actualizacion:{
            type: DataTypes.DATE
        },
    });
    return Inventario;
};
