const division = require('../division');

describe('Check the exception', () => {
  
  test('should check if the function throw an exception', () => {
    expect(() => {
      division(10, 0)
    }).toThrow()
  });

  test('should check if the function does not throw an exception', () => {
    expect(() => {
      division(10, 2)
    }).not.toThrow()
  });

});