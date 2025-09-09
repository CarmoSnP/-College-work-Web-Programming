const express = require("express");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/authRoutes");

const path = require("path");

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use("/auth", authRoutes);

// Servir toda a pasta 'public' do frontend
app.use(express.static(path.join(__dirname, "../../frontend/public")));

// Servir CSS e JS com prefixo '/src'
app.use("/src", express.static(path.join(__dirname, "../../frontend/src")));

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
