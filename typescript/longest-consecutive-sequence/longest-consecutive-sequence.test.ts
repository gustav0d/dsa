import { describe, expect, test } from '@jest/globals';
import {
  bruteForce,
  optimized,
  withSort,
} from './longest-consecutive-sequence';

describe('Longest consecutive sequence', () => {
  const testValues = [100, 4, 200, 1, 3, 2];
  test('optimized implementation should work', () => {
    expect(optimized(testValues)).toBe(4);
  });
  test('bruteForce implementation should work', () => {
    expect(bruteForce(testValues)).toBe(4);
  });
  test('withSort implementation should work', () => {
    expect(withSort(testValues)).toBe(4);
  });
});
