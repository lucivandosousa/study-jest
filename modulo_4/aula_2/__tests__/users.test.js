const users = require('../users');

describe('Check items of array', () => {
  
  test('should check if the array contains all items', () => {
    const expectArray = ["José", "Maria"]

    expect(users).toEqual(expect.arrayContaining(expectArray))
  });

  test('should check if the array does not contains all items', () => {
    const expectArray = ["Paulo", "Carla"]

    expect(users).not.toEqual(expect.arrayContaining(expectArray))
  });

});