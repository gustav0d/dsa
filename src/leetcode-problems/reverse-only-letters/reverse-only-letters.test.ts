import { describe, expect, it } from "@jest/globals";
import { reverseOnlyLetters } from "./reverse-only-letters";

describe('Reverse only letters', () => {
  it('Should work for ab-cd', () => {
    expect(reverseOnlyLetters('ab-cd')).toBe('dc-ba');
  });
  it('Should work for a-bC-dEf-ghIj', () => {
    expect(reverseOnlyLetters('a-bC-dEf-ghIj')).toBe('j-Ih-gfE-dCba');
  });
  it('Should work for Test1ng-Leet=code-Q!', () => {
    expect(reverseOnlyLetters('Test1ng-Leet=code-Q!')).toBe('Qedo1ct-eeLg=ntse-T!');
  });
});