module.exports = app => {
    const ventas = require("../controllers/venta.controller.js");
    var router = require("express").Router();

    router.post("/create/", ventas.create);
    router.get("/", ventas.findAll);
    router.get("/metodo/:metodo_pago", ventas.findByMetodoDePago);
    router.get("/:id", ventas.findOne);
    router.put("/update/:id", ventas.update);
    router.delete("/delete/:id", ventas.delete);

    app.use("/api/venta", router);
};
