/* eslint-disable object-curly-spacing */
import { add } from '../src/CalcFunc';

describe('test add function', () => {
  it('should return 15 for add(10,5)', (): void => {
    expect(add(10, 5)).toBe(15);
  });
  it('should return 5 for add(2,3)', (): void => {
    expect(add(2, 3)).toBe(5);
  });
});
