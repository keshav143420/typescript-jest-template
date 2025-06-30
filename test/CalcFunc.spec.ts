/* eslint-disable object-curly-spacing */
import { add, subtract, multiply, divide } from '../src/CalcFunc';

describe('CalcFunc', () => {
  describe('add', () => {
    it('should add two positive numbers', () => {
      expect(add(2, 3)).toBe(5);
    });
    it('should add negative numbers', () => {
      expect(add(-2, -3)).toBe(-5);
    });
    it('should add zero', () => {
      expect(add(0, 5)).toBe(5);
    });
  });

  describe('subtract', () => {
    it('should subtract two numbers', () => {
      expect(subtract(5, 3)).toBe(2);
    });
    it('should handle negative results', () => {
      expect(subtract(3, 5)).toBe(-2);
    });
  });

  describe('multiply', () => {
    it('should multiply two numbers', () => {
      expect(multiply(2, 3)).toBe(6);
    });
    it('should multiply by zero', () => {
      expect(multiply(5, 0)).toBe(0);
    });
    it('should multiply negative numbers', () => {
      expect(multiply(-2, 3)).toBe(-6);
    });
  });

  describe('divide', () => {
    it('should divide two numbers', () => {
      expect(divide(6, 3)).toBe(2);
    });
    it('should handle negative division', () => {
      expect(divide(-6, 3)).toBe(-2);
    });
    it('should throw when dividing by zero', () => {
      expect(() => divide(5, 0)).toThrow('Cannot divide by zero');
    });
  });
});
