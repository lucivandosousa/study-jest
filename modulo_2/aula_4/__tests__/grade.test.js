const average = require('../grade');

describe('Checking student grades', () => {

  test('should return true for grades 6, 7 and 5', () => {
    expect(average(6, 7, 5)).toBeTruthy()
  });

  test('should return false for grades 6, 5 and 5', () => {
    expect(average(6, 5, 5)).toBeFalsy()
  });

});