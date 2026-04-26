const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");
const DataTypes = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  dialectOptions:{
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  },  
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  }
});
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

const Usuario = require("./usuario.model.js")(sequelize, DataTypes);
const Producto = require("./producto.model.js")(sequelize, DataTypes);
const Inventario = require("./inventario.model.js")(sequelize, DataTypes);
const Venta = require("./venta.model.js")(sequelize, DataTypes);
const Detalle = require("./detalleVenta.model.js")(sequelize, DataTypes);

db.usuarios =  Usuario
db.productos =  Producto
db.inventarios =  Inventario
db.ventas = Venta
db.detalles = Detalle

// Definir relaciones

Producto.hasOne(Inventario, {foreignKey:'id_producto'}); 
Inventario.belongsTo(Producto, {foreignKey:'id_producto'});

Usuario.hasMany(Venta, {foreignKey:'id_usuario'});
Venta.belongsTo(Usuario, {foreignKey:'id_usuario'});

Venta.hasMany(Detalle, {foreignKey:'id_venta'});
Detalle.belongsTo(Venta, {foreignKey:'id_venta'});

Producto.hasMany(Detalle, {foreignKey:'id_producto'});
Detalle.belongsTo(Producto, {foreignKey:'id_producto'});

module.exports = db;