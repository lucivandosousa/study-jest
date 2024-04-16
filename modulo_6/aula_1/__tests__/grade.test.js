const average = require('../grade');

// Globals Jest

beforeAll(() => {
  console.log("Antes de todos os testes");
  gradeOne = 4
  gradeTwo = 8
  gradeTree = 7
});

afterEach(() => {
  console.log("Após cada teste");
  gradeOne = 3
  gradeTwo = 5
  gradeTree = 4
});

describe('Checking student grades', () => {
  
  test('should check if the average of the grades 4, 8 and 7 is graater or equal than 6', () => {
    expect(average(gradeOne, gradeTwo, gradeTree)).toBeGreaterThanOrEqual(6)
  });

  test('should check if the average of the grades 3, 5 and 4 is less or equal than 6', () => {
    expect(average(gradeOne, gradeTwo, gradeTree)).toBeLessThanOrEqual(6)
  });

});