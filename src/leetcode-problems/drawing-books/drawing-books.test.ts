import { expect, test } from "@jest/globals";
import { describe } from "node:test";
import { bruteForce, optimized } from "./drawing-books";

// https://www.hackerrank.com/challenges/drawing-book/
describe('Drawing books', () => {
  test('brute force implementation should work', () => {
    expect(bruteForce(6, 2)).toBe(1);
    expect(bruteForce(5, 4)).toBe(0);
  });
  test('optimized implementation should work', () => {
    expect(optimized(6, 2)).toBe(1);
    expect(optimized(5, 4)).toBe(0);
  });
});