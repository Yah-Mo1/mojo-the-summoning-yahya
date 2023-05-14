const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals')
const { Card, Attack} = require('./index')
const {db} = require('../db/config')

// define in global scope
let card;

// clear db and create new card before tests
beforeAll(async () => {
  await db.sync({ force: true })
  card = await Card.create(
    {
        name: 'Arcturus Spellweaver',
        mojo: 100,
        stamina: 10,
        imgUrl: 'http://localhost:5000/img/arcturus-spellweaver.jpg'
      })
})

// clear db after tests
afterAll(async () => await db.sync({ force: true }))

describe('Card', () => {
  it('has an id', async () => {
    expect(card).toHaveProperty('id')
  })
  it("has name", async () => {
    expect(card.name).toBe('Arcturus Spellweaver')
  } )

  it("has mojo", async () => {
    expect(card.mojo).toBe(100)
  } )

  it("has stamina", async () => {
    expect(card.stamina).toBe(10)
  } )

  it("has imgUrl", async () => {
    expect(card.imgUrl).toBe('http://localhost:5000/img/arcturus-spellweaver.jpg')
  } )
  



  it("has many to many associations between card and attack", async () => {
    const cards = await Card.bulkCreate([{
      name: 'Theron Thunderstrike',
      mojo: 100,
      stamina: 10,
      imgUrl: 'http://localhost:5000/img/theron-thunderstrike.jpg'
    },
    {
      name: 'Lirien Moonshadow',
      mojo: 100,
      stamina: 10,
      imgUrl: 'http://localhost:5000/img/lirien-moonshadow.jpg'
    },
    {
      name: 'Alaric Flamecaller',
      mojo: 100,
      stamina: 10,
      imgUrl: 'http://localhost:5000/img/alaric-flamecaller.jpg'
    }])
    const attacks = await Attack.bulkCreate([{title: "One Two Combo", mojoCost: 20, staminaCost: 3 }, {title: "Machine Kick", mojoCost: 45, staminaCost: 4 }, {title: "triple double", mojoCost: 15, staminaCost: 2}])
    try {
    await cards[0].setAttacks(attacks);
    }
    catch(err) {
      console.log(err)
    }
    // await attacks[0].setCards(cards);
    try {
      await attacks[0].setCards(cards);
      }
      catch(err) {
        console.log(err)
      }
    
    const cardAttack = await cards[0].getAttacks();
    // console.log(cardAttack.length)
   console.log(cardAttack);

   const attackCard = await attacks[0].getCards();
   // console.log(cardAttack.length)
    expect(cardAttack[0]).toHaveProperty("staminaCost");
    expect(attackCard[0]).toHaveProperty("stamina");

  } )  
  //   it("has one to many associations between card and deck", async () => {
  //   // const allDecks = await Deck.bulkCreate([{name: "the matrix", xp: 75},{name: "Doom Burger", xp: 60},{name: "snake pit", xp: 100}]);
  //   // const deck = await Deck.create({name: "the matrix", xp: 75});

  //   await card.setDeck(deck);

    
  //   const cardDeck = await card.getDeck();
  //   console.log(cardDeck);

  //   expect(cardDeck).toHaveProperty("xp");

  // } )  
  
})














