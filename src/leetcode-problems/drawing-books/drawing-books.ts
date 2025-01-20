// problem: https://www.hackerrank.com/challenges/drawing-book/

function optimized(n: number, p: number) {
  const fromFront = Math.floor(p / 2);
  const fromBack = Math.floor(n / 2) - Math.floor(p / 2);
  return Math.min(fromFront, fromBack);
}

function bruteForce(n: number, p: number) {
  let totalPageFlips = 0;
  if (p > Math.floor(n / 2)) {
    for (let i = n % 2 === 0 ? n : n - 1; i > 0 && i > p; i -= 2) {
      totalPageFlips++;
    }
  } else {
    for (let i = 1; i <= n && i < p; i += 2) {
      totalPageFlips++;
    }
  }
  return totalPageFlips;
}

export { optimized, bruteForce };
