// best solution ( O(n) time complexity )
function optimized(arr: number[]): number {
  const set = new Set(arr);
  let lcsLength = 0;

  let currNum = 0;
  let currLcsLength = 0;
  for (const num of set) {
    if (!set.has(num - 1)) {
      currNum = num;
      currLcsLength = 1;

      while (set.has(currNum+1)) {
        currNum++;
        currLcsLength++
      }
      if (currLcsLength > lcsLength) lcsLength = currLcsLength;
    }
  }

  return lcsLength;
}

// O(nlogn) solution
function withSort(arr: number[]): number {
  let lcsLength = 0;
  let currLcsLentgh = 1;

  arr.sort((a, b) => a - b); // O(nlogn)

  // O(n)
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] + 1 === arr[i + 1]) {
      currLcsLentgh++;
    } else {
      if (currLcsLentgh > lcsLength) lcsLength = currLcsLentgh;
      currLcsLentgh = 1;
    }
  }

  return lcsLength;
}

// Worst solution
function bruteForce(arr: number[]): number {
  let lcsLenght = 0;
  let currLcsLength = 0;

  for (let i = 0; i < arr.length; i++) {
    currLcsLength = 1;
    for (let ii = 0; ii < arr.length; ii++) {
      if (arr[i] + currLcsLength === arr[ii]) {
        currLcsLength++;
        ii = 0;
      }
    }
    if (currLcsLength > lcsLenght) lcsLenght = currLcsLength;
  }
  return lcsLenght;
}

export { optimized, withSort, bruteForce };
