module.exports = {
  initialPermutation(start, end) {
    if (!start) {start = 1;}
    if (!end) {end = 9;}
    if (end <= start) {return;}

    initialPermutation = [];
    for (var i = 0, j = (end - start) * 2; i <= j; i += 1) {
      if (i % 2 === 0) {
        initialPermutation.push(start++);
      } else {
        initialPermutation.push(undefined);
      }
    }

    return initialPermutation;
  },
  permute(initialPermutation, fillers) {
    var permutations = [initialPermutation];
    return addFillers(permutations, initialPermutation.length - 2);

    function addFillers(permutations, posn) {
      var newPermutations = [];

      permutations.forEach((perm)=>{
        for (var i = 0, j = fillers.length; i < j; i += 1) {
          var arr = Array.from(perm);
          arr[posn] = fillers[i];
          newPermutations.push(arr);
        }
      });

      if (posn === 1) {return newPermutations;}
      return addFillers(newPermutations, posn - 2);
    }
  },
  join(arr, joiner) {
    var newArr = [], idx = 0;

    while (idx < arr.length) {
      if (arr[idx] === joiner) {
        newArr[newArr.length - 1]  = Number("" + newArr[newArr.length - 1] + arr[idx + 1]);
        idx += 2;
      } else {
        newArr.push(arr[idx]);
        idx += 1;
      }
    }

    return newArr;
  },
  add(arr, adder) {
    var idx = 1, sum = arr[0];
    while (idx < arr.length) {
      if (arr[idx] === adder) {
        sum += arr[idx + 1];
      } else {
        sum -= arr[idx + 1];
      }
      idx += 2;
    }

    return sum;
  }
};
