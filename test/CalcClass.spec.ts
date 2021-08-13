import Calculator from '../src/CalcClass';

describe('Calc', () => {
  it('should return 10 for add(6, 4)', () => {
    expect(Calculator.add(6, 4)).toBe(10);
  });
  it('should return 9 for add(10, -1)', () => {
    expect(Calculator.add(10, -1)).toBe(9);
  });
});
