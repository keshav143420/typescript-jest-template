/**
 * Calculator Class.
 */
class Calculator {
  /**
   * Adds two numbers together.
   * @param {number} firstNumber The first number.
   * @param {number} secondNumber The second number.
   * @return {number} The sum of the two numbers.
   */
  static add(firstNumber: number, secondNumber: number): number {
    return firstNumber + secondNumber;
  }

  /**
   * Subtracts the second number from the first.
   * @param {number} firstNumber The first number.
   * @param {number} secondNumber The second number.
   * @return {number} The result of the subtraction.
   */
  static subtract(firstNumber: number, secondNumber: number): number {
    return firstNumber - secondNumber;
  }

  /**
   * Multiplies two numbers.
   * @param {number} firstNumber The first number.
   * @param {number} secondNumber The second number.
   * @return {number} The product of the two numbers.
   */
  static multiply(firstNumber: number, secondNumber: number): number {
    return firstNumber * secondNumber;
  }

  /**
   * Divides the first number by the second.
   * @param {number} firstNumber The numerator.
   * @param {number} secondNumber The denominator.
   * @return {number} The quotient of the division.
   * @throws {Error} If the denominator is zero.
   */
  static divide(firstNumber: number, secondNumber: number): number {
    if (secondNumber === 0) {
      throw new Error('Cannot divide by zero');
    }
    return firstNumber / secondNumber;
  }
}
export default Calculator;
