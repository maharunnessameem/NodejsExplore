const express = require("express");
const app = express();
const PORT = 3000;

const myMiddleware = (req, res, next) => {
    console.log("Middleware function");
    req.currentTime = new Date(Date.now());
    next();
}

app.get("/", myMiddleware, (req, res) => {
    console.log("I am Home. " + req.currentTime);
    res.send("<h2>I am at Home Route</h2>");
})

app.get("/about", myMiddleware, (req, res) => {
    console.log("I am About. " + req.currentTime);
    res.send("<h2> I am at About Route</h2>")
})

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
})
