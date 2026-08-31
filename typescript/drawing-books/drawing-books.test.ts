import assert from "node:assert/strict";
import { describe, test } from "node:test";
import { bruteForce, optimized } from "./drawing-books.ts";

// https://www.hackerrank.com/challenges/drawing-book/
describe('Drawing books', () => {
  test('brute force implementation should work', () => {
    assert.strictEqual(bruteForce(6, 2), 1);
    assert.strictEqual(bruteForce(5, 4), 0);
  });
  test('optimized implementation should work', () => {
    assert.strictEqual(optimized(6, 2), 1);
    assert.strictEqual(optimized(5, 4), 0);
  });
});