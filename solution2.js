var arr = [1,"",2,"",3,"",4,"",5,"",6,"",7,"",8,"",9],
symbols = ["+", "-", "&"];

for (var i = 0; i < 3; i += 1) {
  arr[1] = symbols[i];
  for (var ii = 0; ii < 3; ii += 1) {
    arr[3] = symbols[ii];
    for (var iii = 0; iii < 3; iii += 1) {
      arr[5] = symbols[iii];
      for (var iiii = 0; iiii < 3; iiii += 1) {
        arr[7] = symbols[iiii];
        for (var iiiii = 0; iiiii < 3; iiiii += 1) {
          arr[9] = symbols[iiiii];
          for (var iiiiii = 0; iiiiii < 3; iiiiii += 1) {
            arr[11] = symbols[iiiiii];
            for (var iiiiiii = 0; iiiiiii < 3; iiiiiii += 1) {
              arr[13] = symbols[iiiiiii];
              for (var iiiiiiii = 0; iiiiiiii < 3; iiiiiiii += 1) {
                arr[15] = symbols[iiiiiiii];
                if (calculate(arr) === 100) { print(arr); }
              }
            }
          }
        }
      }
    }
  }
}

function calculate(arr) {
  var joined = [arr[0]],
  sum;

  for (var i = 1, j = 16; i < j; i += 2) {
    if (arr[i] === "&") {
      joined[joined.length - 1] = Number("" + joined[joined.length - 1] + arr[i + 1]);
    } else {
      joined.push(arr[i]);
      joined.push(arr[i + 1]);
    }
  }

  sum = joined[0];

  for (i = 1, j = joined.length; i < j; i += 2) {
    if (joined[i] === "+") {
      sum += joined[i + 1];
    } else {
      sum -= joined[i + 1];
    }
  }
  
  return sum;
}

function print(arr) {
  var output = arr[0];

  arr.slice(1).forEach((el, idx)=>{
    if (el !== "&") {output += (arr[idx] === "&" ? "" : " ") + el;}
  });

  console.log(output);
}
