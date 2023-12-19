// require('dotenv').config()
module.exports = {
    HOST: "ec2-44-206-204-65.compute-1.amazonaws.com",
    USER: "ckkidsbzkdjtol",
    PASSWORD: "78b031dedcd759fd6e9addaff290e64cb84865ef41c05da15767a001db294c8d",
    DB: "ddgeo4dl829bo1",
    dialect: "postgres",
    pool: {
        max:5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};