const average = require('../grade');

describe('Checking student grades', () => {
  
  test('should check if the average of the grades 4, 3 and 6 is equal 4.33', () => {
    expect(average(4, 3, 6)).toBeCloseTo(4.33)
  });

  test('should check if the average of the grades 5, 5 and 6 is equal 5.3', () => {
    expect(average(5, 5, 6)).toBeCloseTo(5.333, 3)
  });

});