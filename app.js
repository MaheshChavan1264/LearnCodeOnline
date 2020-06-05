require('dotenv').config()


const mongoose = require('mongoose');
const express = require('express');
const app = express();

mongoose
.connect(process.env.DATABASE, {
    userNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
.then(() => {
    console.log("DB CONNECTED");
}).catch(
    console.log("DB GOT OPPPS")
)

mongoose.connect('mongodb://localhost:27017/test', 
{useNewUrlParser: true });

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`app is running at ${port}`);
});