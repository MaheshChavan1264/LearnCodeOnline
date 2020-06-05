const express = require("express");

const app = express();

const port = 8000;

app.get("/login", (req, res) => {
    return res.send("You are visiting the login there...");
});

app.listen(port, () => {
    console.log("Server is up and running.....");
});
