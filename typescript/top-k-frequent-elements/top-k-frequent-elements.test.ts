import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { topKFrequent } from "./top-k-frequent-elements.ts";

describe('Top K Frequent Elements', () => {
  it('Should work for  [1,1,1,2,2,3], k = 2', () =>{
    assert.deepStrictEqual(topKFrequent([1,1,1,2,2,3], 2), [1,2]);
  });
});