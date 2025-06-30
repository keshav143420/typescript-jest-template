/**
 * Adds two numbers together.
 * @param {number} firstNumber The first number.
 * @param {number} secondNumber The second number.
 * @return {number} The sum of the two numbers.
 */
export function add(firstNumber: number, secondNumber: number): number {
  return firstNumber + secondNumber;
}

/**
 * Subtracts the second number from the first.
 * @param {number} firstNumber The first number.
 * @param {number} secondNumber The second number.
 * @return {number} The result of the subtraction.
 */
export function subtract(firstNumber: number, secondNumber: number): number {
  return firstNumber - secondNumber;
}

/**
 * Multiplies two numbers.
 * @param {number} firstNumber The first number.
 * @param {number} secondNumber The second number.
 * @return {number} The product of the two numbers.
 */
export function multiply(firstNumber: number, secondNumber: number): number {
  return firstNumber * secondNumber;
}

/**
 * Divides the first number by the second.
 * @param {number} firstNumber The numerator.
 * @param {number} secondNumber The denominator.
 * @return {number} The quotient of the division.
 * @throws {Error} If the denominator is zero.
 */
export function divide(firstNumber: number, secondNumber: number): number {
  if (secondNumber === 0) {
    throw new Error('Cannot divide by zero');
  }
  return firstNumber / secondNumber;
}
