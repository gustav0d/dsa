import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { reverseOnlyLetters } from "./reverse-only-letters.ts";

describe('Reverse only letters', () => {
  it('Should work for ab-cd', () => {
    assert.strictEqual(reverseOnlyLetters('ab-cd'), 'dc-ba');
  });
  it('Should work for a-bC-dEf-ghIj', () => {
    assert.strictEqual(reverseOnlyLetters('a-bC-dEf-ghIj'), 'j-Ih-gfE-dCba');
  });
  it('Should work for Test1ng-Leet=code-Q!', () => {
    assert.strictEqual(reverseOnlyLetters('Test1ng-Leet=code-Q!'), 'Qedo1ct-eeLg=ntse-T!');
  });
});