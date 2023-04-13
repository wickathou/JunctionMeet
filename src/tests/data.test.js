import { describe, test, expect } from 'vitest';
import { testFunction } from '../redux/data/dataSlice';

describe('A simple test', () => {
  test('returns test', () => {
    expect(1).toBe(1);
  });

  test('function', () => {
    expect(testFunction(1, 2)).toBe(3);
  });
});
