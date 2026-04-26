module.exports = app => {
    const productos = require("../controllers/producto.controller.js");
    var router = require("express").Router();

    router.post("/create/", productos.create);
    router.get("/", productos.findAll);
    router.get("/:id", productos.findOne);
    router.put("/update/:id", productos.update);
    router.delete("/delete/:id", productos.delete);

    app.use("/api/producto", router);
};
