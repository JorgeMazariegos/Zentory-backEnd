module.exports = app => {
    const inventarios = require("../controllers/inventario.controller.js");
    var router = require("express").Router();

    router.post("/create/", inventarios.create);
    router.get("/", inventarios.findAll);
    router.get("/:id", inventarios.findOne);
    router.put("/update/:id", inventarios.update);
    router.delete("/delete/:id", inventarios.delete);

    app.use("/api/inventario", router);
};
