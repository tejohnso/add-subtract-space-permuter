const permuter = require("./permuter.js"),
EOL = require("os").EOL,
solution = [];

var initialPermutation = permuter.initialPermutation(1, 9);

var fullPermutation = permuter.permute(initialPermutation, ["+", "-", "c"]);

var joinedPermutations = fullPermutation.map((perm)=>{
  return permuter.join(perm, "c");
});

joinedPermutations.forEach((perm)=>{
  if (permuter.add(perm, "+") === 100) {solution.push(perm.join(" "));}
});

console.log(solution.sort().join(EOL));
