const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./app/models");
db.sequelize.sync();

app.get("/", (req, res) => {
  res.json({ message: "Zentory API" });
});

require("./app/routes/usuario.routes")(app);
require("./app/routes/producto.routes")(app);
require("./app/routes/inventario.routes")(app);
require("./app/routes/venta.routes")(app);
require("./app/routes/detalleVenta.routes")(app);


const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});