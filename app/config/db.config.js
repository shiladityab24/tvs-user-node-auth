// require('dotenv').config()
module.exports = {
    HOST: "ec2-18-211-215-8.compute-1.amazonaws.com",
    USER:  "egabsinpheuafx",
    PASSWORD: "ee3a02723eccb01e971556e5efbf3e8fcf9094adbb12915e9c9a091fc62a0151",
    DB: "de2gkpp43b84i9",
    dialect: "postgres",
    pool: {
        max:5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};