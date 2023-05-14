const { User } = require('./User')
const { Deck } = require("./Deck")
const { Card } = require("./Card")
const { Attack } = require("./Attack")

// import the rest of your models above

//set up the associations here

//one to one relation between deck and user
User.hasOne(Deck);
Deck.belongsTo(User);


//one to many relation between deck and cards

Deck.hasMany(Card);
Card.belongsTo(Deck);



//Many to Many relation between card and attack
Card.belongsToMany(Attack, {through: "CardAttack"});
Attack.belongsToMany(Card, {through: "CardAttack"});
// and then export them all below
module.exports = { User,
Deck,
Card,
Attack,
}
