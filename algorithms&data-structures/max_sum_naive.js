function maxSubarraySum(arr, num) {
  if (num > arr.length) {
    return console.log(null);
  }

  let max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i++) {
    let temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return console.log(max);
}

maxSubarraySum([2, 12, 4, 17, 5, 1, 7, 9, 2, 1, 1, 3], 2);
