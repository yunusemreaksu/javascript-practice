function binarySearch(arr, element) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);

  while (arr[middle] !== element && start <= end) {
    console.log(start, middle, end);
    if (element < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }
  console.log(start, middle, end);
  if (arr[middle] === element) {
    return console.log(middle);
  }
  return console.log(-1);
}

binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 15);
