const express = require("express");
const cors = require("cors");
// require('dotenv').config()
const app = express();

var corsOptions = {
    origin: "http://localhost:3000"
};


app.use(cors(corsOptions));

//parse requests of content-type -application/json
app.use(express.json());

//parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({extended: true}));

// SignIn and SignUp
app.get("/",(req,res) => {
    res.json({message: "User Authentication for SignIn and SignUp.Server is running successfully."})
});

const db = require("./app/models");

//routes
require('./app/routes/auth.routes')(app);


db.sequelize.sync({force: true}).then(() => {
    console.log('Drop and Resync Db');
});


//set port , listen for requests
const PORT = process.env.PORT || 3002;
app.listen(PORT,()=> {
    console.log(`Server is running on port ${PORT}`);
})