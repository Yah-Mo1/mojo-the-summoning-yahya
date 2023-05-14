// create your User model here
const Sequelize = require("sequelize");
const {db} = require("../db/config.js");



//building my user model


const User = db.define("User", {
    username: Sequelize.STRING,
})



module.exports = {
    User,
}
