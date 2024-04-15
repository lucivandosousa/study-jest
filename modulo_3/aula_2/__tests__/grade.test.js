const average = require('../grade');

describe('Checking student grades', () => {
  
  test('should check if the average of the grades 4, 3 and 8 is smaller than 6', () => {
    expect(average(4, 3, 8)).toBeLessThan(6)
  });

  test('should check if the average of the grades 6, 6 and 6 is smaller than or equal 6', () => {
    expect(average(6, 6, 6)).toBeLessThanOrEqual(6)
  });

});