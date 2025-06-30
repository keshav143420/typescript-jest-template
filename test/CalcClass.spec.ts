import Calculator from '../src/CalcClass';

describe('Calc', () => {
  describe('add', () => {
    it('should add two positive numbers: add(6, 4) = 10', () => {
      expect(Calculator.add(6, 4)).toBe(10);
    });
    it('should add a positive and a negative number: add(10, -1) = 9', () => {
      expect(Calculator.add(10, -1)).toBe(9);
    });
    it('should add two zeros: add(0, 0) = 0', () => {
      expect(Calculator.add(0, 0)).toBe(0);
    });
    it('should add two negative numbers: add(-2, -3) = -5', () => {
      expect(Calculator.add(-2, -3)).toBe(-5);
    });
  });

  describe('subtract', () => {
    it('should subtract a smaller number from a larger: subtract(5, 3) = 2', () => {
      expect(Calculator.subtract(5, 3)).toBe(2);
    });
    it('should subtract a larger number from a smaller: subtract(3, 5) = -2', () => {
      expect(Calculator.subtract(3, 5)).toBe(-2);
    });
    it('should subtract zero from zero: subtract(0, 0) = 0', () => {
      expect(Calculator.subtract(0, 0)).toBe(0);
    });
    it('should subtract zero from a positive: subtract(5, 0) = 5', () => {
      expect(Calculator.subtract(5, 0)).toBe(5);
    });
    it('should subtract a positive from zero: subtract(0, 5) = -5', () => {
      expect(Calculator.subtract(0, 5)).toBe(-5);
    });
  });

  describe('multiply', () => {
    it('should multiply two positives: multiply(2, 3) = 6', () => {
      expect(Calculator.multiply(2, 3)).toBe(6);
    });
    it('should multiply by zero: multiply(5, 0) = 0', () => {
      expect(Calculator.multiply(5, 0)).toBe(0);
    });
    it('should multiply zero by a positive: multiply(0, 5) = 0', () => {
      expect(Calculator.multiply(0, 5)).toBe(0);
    });
    it('should multiply a negative and a positive: multiply(-2, 3) = -6', () => {
      expect(Calculator.multiply(-2, 3)).toBe(-6);
    });
    it('should multiply two negatives: multiply(-2, -3) = 6', () => {
      expect(Calculator.multiply(-2, -3)).toBe(6);
    });
  });

  describe('divide', () => {
    it('should divide two positives: divide(6, 3) = 2', () => {
      expect(Calculator.divide(6, 3)).toBe(2);
    });
    it('should divide a negative by a positive: divide(-6, 3) = -2', () => {
      expect(Calculator.divide(-6, 3)).toBe(-2);
    });
    it('should divide two negatives: divide(-6, -3) = 2', () => {
      expect(Calculator.divide(-6, -3)).toBe(2);
    });
    it('should divide zero by a positive: divide(0, 5) = 0', () => {
      expect(Calculator.divide(0, 5)).toBe(0);
    });
    it('should throw when dividing by zero: divide(5, 0)', () => {
      expect(() => Calculator.divide(5, 0)).toThrow('Cannot divide by zero');
    });
    it('should throw when dividing zero by zero: divide(0, 0)', () => {
      expect(() => Calculator.divide(0, 0)).toThrow('Cannot divide by zero');
    });
  });
});
