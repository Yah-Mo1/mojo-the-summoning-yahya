// create your User model here
const Sequelize = require("sequelize");
const {db} = require("../db/config.js");



//building my Deck model


const Deck = db.define("Deck", {
    name: Sequelize.STRING,
    xp: Sequelize.INTEGER
}, {tableName: "Decks"})



module.exports = {
    Deck,
}
