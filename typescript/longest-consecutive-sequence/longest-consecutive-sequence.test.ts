import assert from 'node:assert/strict';
import { describe, test } from 'node:test';
import {
  bruteForce,
  optimized,
  withSort,
} from './longest-consecutive-sequence.ts';

describe('Longest consecutive sequence', () => {
  const testValues = [100, 4, 200, 1, 3, 2];
  test('optimized implementation should work', () => {
    assert.strictEqual(optimized(testValues), 4);
  });
  test('bruteForce implementation should work', () => {
    assert.strictEqual(bruteForce(testValues), 4);
  });
  test('withSort implementation should work', () => {
    assert.strictEqual(withSort(testValues), 4);
  });
});
