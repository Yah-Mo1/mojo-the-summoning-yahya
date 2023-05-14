const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals')
const { Deck, Card } = require('./index')
const {db} = require('../db/config')

// define in global scope
let deck;
// clear db and create new card before tests
beforeAll(async () => {
  await db.sync({ force: true })
   deck = await Deck.create({name: "snake pit", xp: 100})
  }
    
)

// clear db after tests
afterAll(async () => await db.sync({ force: true }))

describe('Deck', () => {
  it('has an id', async () => {
    expect(deck).toHaveProperty('id')
  })
  it("has name", async () => {
    expect(deck.name).toBe('snake pit')
  } )

  it("has mojo", async () => {
    expect(deck.xp).toBe(100)
  } )

  it("has one to many associations between card and deck", async () => {
    // const allDecks = await Deck.bulkCreate([{name: "the matrix", xp: 75},{name: "Doom Burger", xp: 60},{name: "snake pit", xp: 100}]);
    const allCards = await Card.bulkCreate([ {
      name: 'Arcturus Spellweaver',
      mojo: 100,
      stamina: 10,
      imgUrl: 'http://localhost:5000/img/arcturus-spellweaver.jpg'
    },
    {
      name: 'Nimue Mistral',
      mojo: 100,
      stamina: 10,
      imgUrl: 'http://localhost:5000/img/nimue-mistral.jpg'
    },
    {
      name: 'Theron Thunderstrike',
      mojo: 100,
      stamina: 10,
      imgUrl: 'http://localhost:5000/img/theron-thunderstrike.jpg'
    }]);

    await deck.setCards(allCards);
    const updatedDeck = await deck.getCards();

    
    // const cardDeck = await Deck.getCard();
    // console.log(updatedDeck);

    expect(updatedDeck[0]).toHaveProperty("mojo");

  } )  
  
})