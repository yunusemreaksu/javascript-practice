function searchLinear(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return console.log(i);
    }
  }
  return console.log(-1);
}

searchLinear([34, 56, 1, 2], 4);
