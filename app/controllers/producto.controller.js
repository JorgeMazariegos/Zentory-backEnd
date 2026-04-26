const db = require("../models");
const Producto = db.productos;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {

    const producto = {
        codigo: req.body.codigo,
        nombre: req.body.nombre,
        precio_venta: req.body.precio_venta,
        stock_minimo: req.body.stock_minimo,
        descripcion: req.body.descripcion,
    };

    Producto.create(producto)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the product."
            });
        });
};

exports.findAll = (req, res) => {
    const nombre = req.query.nombre;
    var condition = nombre ? { nombre: { [Op.iLike]: `%${nombre}%` } } : null;

    Producto.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving products."
            });
        });
};

exports.findOne = (req, res) => {
    const id_producto = req.params.id;

    Producto.findByPk(id_producto)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving producto with id=" + id_producto
            });
        });
};

exports.update = (req, res) => {
    const id = req.params.id;

    Producto.update(req.body, {
        where: { id_producto: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Producto was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Producto with id=${id}. Maybe Producto was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Producto with id=" + id
            });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    Producto.destroy({
        where: { id_producto: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Producto was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Producto with id=${id}. Maybe Producto was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Producto with id=" + id
            });
        });
};
