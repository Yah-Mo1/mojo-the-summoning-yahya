const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals')
const { User, Deck} = require('./')
// const { Deck } = require("./Deck")
const {db} = require('../db/config')

// define in global scope
let user;

// clear db and create new user before tests
beforeAll(async () => {
  await db.sync({ force: true })
  user = await User.create({ username: 'gandalf' })
})

// clear db after tests
afterAll(async () => await db.sync({ force: true }))

describe('User', () => {
  it('has an id', async () => {
    expect(user).toHaveProperty('id')
  })

  /**
   * Create more tests
   * E.g. check that the username of the created user is actually gandalf
   */

  it("has username", async () => {
    expect(user.username).toBe("gandalf")
  } )

  it("has association with deck", async () => {
    const deck = await Deck.create({name: "the matrix", xp: 75})
    await user.setDeck(deck);
    // const userWithDeck = await User.findOne({where: {username: "gandalf"}, include: Deck});
    const userDeck = await user.getDeck();
    // console.log(userWithDeck);

    expect(userDeck).toHaveProperty("xp")
  } )

})


