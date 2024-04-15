const average = require('../grade');

describe('Checking student grades', () => {
  
  test('should check if the average of the grades 7, 8 and 7 is greater than 6', () => {
    expect(average(7, 8, 7)).toBeGreaterThan(6)
  });

  test('should check if the average of the grades 6, 6 and 6 is greater than or equal 6', () => {
    expect(average(6, 6, 6)).toBeGreaterThanOrEqual(6)
  });

});