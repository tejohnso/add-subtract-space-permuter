const assert = require("assert"),
permuter = require("../permuter.js");

describe("Permuter", ()=>{
  it("exists", ()=>{
    assert.ok(permuter);
  });

  it("sets up an inital permutation with a start and end, separated by undefined", ()=>{
    var initialPermutation = permuter.initialPermutation(1, 3);
    assert.deepEqual(initialPermutation, [1, undefined, 2, undefined, 3]);

    initialPermutation = permuter.initialPermutation(3, 7);
    assert.deepEqual(initialPermutation,
    [3, undefined, 4, undefined, 5, undefined, 6, undefined, 7]);
  });

  it("combinatorially fills the undefined spaces with other values", ()=>{
    var initialPermutation = permuter.initialPermutation(1, 3);
    var fullPermutation = permuter.permute(initialPermutation, ["a", "b", "c"]);

    function findPermutation(perm) {
      return fullPermutation.some((permutation)=>{
        return perm.every((val)=>{
          return permutation.indexOf(val) > -1;
        });
      });
    }

    assert.ok(findPermutation([1, "c", 2, "c", 3]));
    assert.ok(findPermutation([1, "b", 2, "c", 3]));
    assert.ok(findPermutation([1, "a", 2, "c", 3]));
    assert.ok(findPermutation([1, "c", 2, "b", 3]));
    assert.ok(findPermutation([1, "b", 2, "b", 3]));
    assert.ok(findPermutation([1, "a", 2, "b", 3]));
    assert.ok(findPermutation([1, "c", 2, "a", 3]));
    assert.ok(findPermutation([1, "b", 2, "a", 3]));
    assert.ok(findPermutation([1, "a", 2, "a", 3]));
  });

  it("contains the correct number of permutations", ()=>{
    var initialPermutation = permuter.initialPermutation(1, 9);
    var fullPermutation = permuter.permute(initialPermutation, ["a", "b", "c"]);

    assert.equal(fullPermutation.length, Math.pow(3, 8));
  });

  it("joins for certain filler", ()=>{
    assert.deepEqual(permuter.join([1, "a", 2, "c", 3], "c"), [1, "a", 23]);
    assert.deepEqual(permuter.join([1, "c", 2, "a", 3], "c"), [12, "a", 3]);
    assert.deepEqual(permuter.join([1, "c", 2, "c", 3], "c"), [123]);
  });

  it("adds and subtracts for certain fillers", ()=>{
    assert.equal(permuter.add([1, "a", 2, "b", 3], "a"), 0);
    assert.equal(permuter.add([1, "b", 2, "a", 3], "a"), 2);
    assert.equal(permuter.add([1, "a", 2, "a", 3], "a"), 6);
  });
});
