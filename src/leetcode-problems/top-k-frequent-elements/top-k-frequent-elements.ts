export function topKFrequent(arr: number[], k: number) {
  let topKFrequent: number[] = [];
  let frequencyMap: { [key: number]: number } = {};
  for (let num of arr) {
    if (typeof frequencyMap[num] === 'number') {
      frequencyMap[num]++;
    } else {
      frequencyMap[num] = 1;
    }
  }

  /*
    here's the catch: we're creating an array with arr.length elements
    so we can use the array position to "sort" how many times a number
    appears; we assign an array to each position because there could be
    an equal number of appearances from different numbers (half one half
    another for example)
  */
  let bucket: Array<Array<number>> = [];
  for (let i = 0; i < arr.length + 1; i++) {
    // arr.length+1 bc later we can access via the times of appearance instead of index
    bucket[i] = [];
  }

  for (let key in frequencyMap) {
    bucket[frequencyMap[key]].push(Number(key));
  }

  for (let i = arr.length; i > 0; i--) {
    for (const n of bucket[i]) {
      topKFrequent.push(n);
      if (topKFrequent.length === k) {
        return topKFrequent;
      }
    }
  }

  return topKFrequent;
}
