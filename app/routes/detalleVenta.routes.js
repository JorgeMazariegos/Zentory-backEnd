module.exports = app => {
    const detalleVentas = require("../controllers/detalleVenta.controller.js");
    var router = require("express").Router();

    router.post("/create/", detalleVentas.create);
    router.get("/", detalleVentas.findAll);
    router.get("/:id", detalleVentas.findOne);
    router.put("/update/:id", detalleVentas.update);
    router.delete("/delete/:id", detalleVentas.delete);

    app.use("/api/detalleVenta", router);
};
