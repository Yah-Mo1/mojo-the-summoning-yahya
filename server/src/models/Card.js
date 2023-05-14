// create your CARD model here
const Sequelize = require("sequelize");
const {db} = require("../db/config.js");



//building my CARD model


const Card = db.define("Card", {
    name: Sequelize.STRING,
    mojo: Sequelize.INTEGER,
    stamina: Sequelize.INTEGER,
    imgUrl: Sequelize.STRING
}, {tableName: "Cards"})



module.exports = {
    Card,
}
