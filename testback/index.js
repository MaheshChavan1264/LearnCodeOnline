const express = require("express");

const app = express();

const port = 8000;


const admin = (req, res) => {
    return res.send("This is admin dashboard");

};
const isAdmin = (req, res,next) => {
    console.log("isAdmin is running");
    next();
};

const isLoggedIn = (req, res,next) => {
    
};
app.get("/admin", isLoggedIn,isAdmin,admin);
app.get("/", (req, res) => {
    return res.send("this is home page");
});

app.get("/login", (req, res) => {
    return res.send("You are visiting the login there...");
});

app.get("/admin", (req,res) => {
    return res.send("this is admin");
})

app.listen(port, () => {
    console.log("Server is up and running.....");
});
