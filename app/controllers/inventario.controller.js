const db = require("../models");
const Inventario = db.inventarios;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {

    const inventario = {
        id_producto: req.body.id_producto,
        cantidad_disponible: req.body.cantidad_disponible,
        fecha_actualizacion: req.body.fecha_actualizacion,
    };

    Inventario.create(inventario)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the inventory record."
            });
        });
};

exports.findAll = (req, res) => {
    const id_producto = req.query.id_producto;
    var condition = id_producto ? { id_producto: { [Op.eq]: id_producto } } : null;

    Inventario.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving inventory records."
            });
        });
};

exports.findOne = (req, res) => {
    const id_inventario = req.params.id;

    Inventario.findByPk(id_inventario)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving inventario with id=" + id_inventario
            });
        });
};

exports.update = (req, res) => {
    const id = req.params.id;

    Inventario.update(req.body, {
        where: { id_inventario: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Inventario was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Inventario with id=${id}. Maybe Inventario was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Inventario with id=" + id
            });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    Inventario.destroy({
        where: { id_inventario: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Inventario was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Inventario with id=${id}. Maybe Inventario was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Inventario with id=" + id
            });
        });
};
