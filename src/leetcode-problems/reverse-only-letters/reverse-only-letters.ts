export function reverseOnlyLetters(s: string): string {
  let reversedString = [...s];
  let left = 0;
  let right = s.length - 1;
  let aux = '';

  const isLetter = /[A-Za-z]/i;
  while (left < right) {
    if (!s[left].match(isLetter)) {
      left++;
    } else if (!s[right].match(isLetter)) {
      right--;
    } else {
      aux = reversedString[left];
      reversedString[left] = reversedString[right];
      reversedString[right] = aux;

      left++;
      right--;
    }
  }

  return reversedString.join('');
}
