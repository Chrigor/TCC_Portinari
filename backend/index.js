const express = require("express");
const app = express();

const cors = require("cors");
const routes = require("./routes.js");

var port = process.env.PORT || 3333;

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(port, () => {
    console.log(`O server está escutando na porta ${port}`);
})

