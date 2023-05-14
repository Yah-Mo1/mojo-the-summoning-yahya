const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals')
const { Attack } = require('./Attack')
const {db} = require('../db/config')

// define in global scope
let attack;

// clear db and create new user before tests
beforeAll(async () => {
  await db.sync({ force: true })
  attack = await Attack.create({title: "One Two Combo", mojoCost: 20, staminaCost: 3 })
})

// clear db after tests
afterAll(async () => await db.sync({ force: true }))



//testing for attack fields
describe('User', () => {
  it('has an id', async () => {
    expect(attack).toHaveProperty('id')
  })
  it("has title", async () => {
    expect(attack.title).toBe("One Two Combo")
  } )

  it("has mojoCost", async () => {
    expect(attack.mojoCost).toBe(20)
  } )

  it("has staminaCost", async () => {
    expect(attack.staminaCost).toBe(3)
  } )
})


