const users = require('../users');

describe('Check array items', () => {
  
  test('check if the person is in the array items', () => {
    expect(users).toContain("Maria")
  });

  test('check if the person is not in the array items ', () => {
    expect(users).not.toContain("João")
  });

});