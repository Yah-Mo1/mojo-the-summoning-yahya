// create your Attach model here
const Sequelize = require("sequelize");
const {db} = require("../db/config.js");



//building my Attack model


const Attack = db.define("Attack", {
    title: Sequelize.STRING,
    mojoCost: Sequelize.INTEGER,
    staminaCost: Sequelize.INTEGER
}, {tableName: "Attacks"})



module.exports = {
    Attack,
}
