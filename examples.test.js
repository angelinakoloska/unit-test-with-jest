const {sum, sumArrays} = require('./examples');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('adds floats 1.00000001 and 3 to equal 4', () => {
    expect(sum(1.00000001, 3)).toBe(4);
});

test('adds floats 1.00000001 and 3 to be close to 4', () => {
    expect(sum(1.00000001, 3)).toBeCloseTo(4);
});

test('adds number and string', () => {
    expect(() => sum('1', 2)).toThrow(Error);
});

test('adds number and string, checks for exact error', () => {
    expect(() => sum('1', 2)).toThrow('Both arguments need to be numbers');
});

test('adds number and string, checks for exact error, to be failed', () => {
    expect(() => sum('1', 2)).toThrow('All arguments need to be numbers');
});

test('adds two arrays of numbers', () => {
    expect(sumArrays([1,2], [2,3])).toContain(3);
    expect(sumArrays([1,2], [2,3])).toContain(5);
});

test('adds two arrays of numbers - to be failed', () => {
    expect(sumArrays([1,2], [2,3])).toContain(3);
    expect(sumArrays([1,2], [2,3])).toContain(6);
});