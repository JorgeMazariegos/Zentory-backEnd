const db = require("../models");
const Venta = db.ventas;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {

    const venta = {
        id_usuario: req.body.id_usuario,
        fecha_venta: req.body.fecha_venta,
        total: req.body.total,
        descuento: req.body.descuento,
        impuesto: req.body.impuesto,
    };

    Venta.create(venta)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the sale."
            });
        });
};

exports.findAll = (req, res) => {
    const id_usuario = req.query.id_usuario;
    var condition = id_usuario ? { id_usuario: { [Op.eq]: id_usuario } } : null;

    Venta.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving sales."
            });
        });
};

exports.findOne = (req, res) => {
    const id_venta = req.params.id;

    Venta.findByPk(id_venta)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving venta with id=" + id_venta
            });
        });
};

exports.update = (req, res) => {
    const id = req.params.id;

    Venta.update(req.body, {
        where: { id_venta: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Venta was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Venta with id=${id}. Maybe Venta was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Venta with id=" + id
            });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    Venta.destroy({
        where: { id_venta: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Venta was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Venta with id=${id}. Maybe Venta was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Venta with id=" + id
            });
        });
};
