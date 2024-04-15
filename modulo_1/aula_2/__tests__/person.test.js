const Person = require('../person');

const sousa = new Person(
  "Sousa Silva",
  "sousa@gmail.com",
  new Date(1990, 10, 1)
)

const teste = new Person(
  "Sousa Silva",
  "sousa@gmail.com",
  new Date(1990, 10, 1)
)

describe("Campara objects and properties", () => {

  test("should check if the sousa object is different from the teste object", () => {
    expect(sousa).not.toBe(teste)
  })

  test("should check whether the properties of the sousa object are the same as the properties of the teste object", () => {
    expect(sousa).toEqual(teste)
  })

  test("should check if the objects are instances of Person", () => {
    expect(sousa instanceof Person).toBe(teste instanceof Person)
  })

})
