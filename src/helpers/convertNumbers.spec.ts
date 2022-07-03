import { convertNumberToString } from './convertNumbers';

describe('testing convertNumber function', () => {
  it('should convert billion to litteral', () => {
    expect(convertNumberToString(1800000000.806)).toBe('1,8 B');
  });
  it('should convert million to litteral', () => {
    expect(convertNumberToString(1800000.806)).toBe('1,8 M');
  });
  it('should convert number with spaces as separator', () => {
    expect(convertNumberToString(10000)).toBe('10\u202f000');
  });
  it('should convert float to number with only 2 decimals', () => {
    expect(convertNumberToString(10.845467678345)).toBe('10,85');
  });
});
