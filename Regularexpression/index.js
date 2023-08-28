const express = require("express");
const app = express();
const PORT = 3000;

app.get("/products/:id([0-9]{3})", (req, res) => {
    res.send(`<h2>ID=${req.params.id}</h2>`)
})

app.get("/products/:([0-9]{3})", (req, res) => {
    res.send(`<h2
`)
})

app.use("*", (req, res) => {
    res.status(404).send({
        message: "not a valid route",
    })
})

app.listen(PORT, (req, res) => {
    console.log(`server is running at http://localpost:${PORT}`);
})