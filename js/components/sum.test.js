import { sum } from './sum.js';

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});
test('adds 10 + 2 to equal 12', () => {
    expect(sum(10, 2)).toBe(12);
});
test('adds 11 + 2 to equal 13', () => {
    expect(sum(11, 2)).toBe(13);
});
test('adds 0.1 + 0.2 to equal 0.3', () => {
    expect(sum(0.1, 0.2)).toBeCloseTo(0.3, 5);
});
