const db = require("../models"); 
const Usuario = db.usuarios;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {

    const usuario = {
        nombre: req.body.nombre,
        email: req.body.email,
        telefono: req.body.telefono,
        rol: req.body.rol,
        password_hash: req.body.password_hash,
        fecha_registro: req.body.fecha_registro,
        estado: req.body.estado,
    };

    Usuario.create(usuario)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the client."
            });
        });
};

exports.findAll = (req, res) => {
    const nombre = req.query.nombre;
    var condition = nombre ? { nombre: { [Op.iLike]: `%${nombre}%` } } : null;

    Usuario.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving clients."
            });
        });
};

exports.findOne = (req, res) => {
    const id_usuario = req.params.id;

    Usuario.findByPk(id_usuario)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving usuario with id=" + id_usuario
            });
        });
};

exports.findByEmail = (req, res) => {
    const email = req.params.email; 

    Usuario.findOne({ where: { email: email } })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving usuario with email=" + email
            });
        }); 
};

exports.update = (req, res) => {
    const id = req.params.id;

    Usuario.update(req.body, {
        where: { id_usuario: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Usuario was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Usuario with id=${id}. Maybe Usuario was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Usuario with id=" + id
            });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;
    Usuario.destroy({
        where: { id_usuario: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Usuario was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Usuario with id=${id}. El usuario no fue encontado!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Usuario with id=" + id
            });
        });
};


