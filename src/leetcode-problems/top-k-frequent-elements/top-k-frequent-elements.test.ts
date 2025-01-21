import { describe, expect, it } from "@jest/globals";
import { topKFrequent } from "./top-k-frequent-elements";

describe('Top K Frequent Elements', () => {
  it('Should work for  [1,1,1,2,2,3], k = 2', () =>{
    expect(topKFrequent([1,1,1,2,2,3], 2)).toEqual([1,2]);
  });
});