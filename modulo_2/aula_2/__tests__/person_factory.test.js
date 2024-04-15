const { Employee, Client } = require('../person')
const PersonFactory = require('../person_factory')

const factory = new PersonFactory()

describe("Factory of Person", () => {

  test("passing the parameter with client it should return new client", () => {
    expect(factory.getPerson("client")).toBeInstanceOf(Client)
  })

  test("passing the parameter with employee it should return new employee", () => {
    expect(factory.getPerson("employee")).toBeInstanceOf(Employee)
  })

})