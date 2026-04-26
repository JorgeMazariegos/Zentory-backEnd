const db = require("../models");
const Detalle = db.detalles;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    const detalle = {
        id_venta: req.body.id_venta,
        id_producto: req.body.id_producto,
        cantidad: req.body.cantidad,
        precio_unitario: req.body.precio_unitario,
        subtotal: req.body.subtotal,
    };

    Detalle.create(detalle)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the sale detail."
            });
        });
};

exports.findAll = (req, res) => {
    const id_venta = req.query.id_venta;
    const id_producto = req.query.id_producto;

    let condition = null;
    if (id_venta && id_producto) {
        condition = { id_venta: { [Op.eq]: id_venta }, id_producto: { [Op.eq]: id_producto } };
    } else if (id_venta) {
        condition = { id_venta: { [Op.eq]: id_venta } };
    } else if (id_producto) {
        condition = { id_producto: { [Op.eq]: id_producto } };
    }

    Detalle.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving sale details."
            });
        });
};

exports.findOne = (req, res) => {
    const id_detalle = req.params.id;

    Detalle.findByPk(id_detalle)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving sale detail with id=" + id_detalle
            });
        });
};

exports.update = (req, res) => {
    const id = req.params.id;

    Detalle.update(req.body, {
        where: { id_detalle: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Sale detail was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update sale detail with id=${id}. Maybe it was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating sale detail with id=" + id
            });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    Detalle.destroy({
        where: { id_detalle: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Sale detail was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete sale detail with id=${id}. Maybe it was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete sale detail with id=" + id
            });
        });
};
