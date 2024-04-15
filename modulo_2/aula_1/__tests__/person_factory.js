const PersonFactory = require('../person_factory')

const factory = new PersonFactory()

describe("Factory of Person", () => {

  test("not passing the parameter should return null", () => {
    expect(factory.getPerson()).toBeNull()
  })

  test('passed the invalid parameter must return null', () => {
    expect(factory.getPerson("teste")).toBeNull()
  })

})