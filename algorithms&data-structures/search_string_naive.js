function searchStringNaive(longStr, shortStr) {
  let count = 0;
  for (let i = 0; i < longStr.length; i++) {
    for (let j = 0; j < shortStr.length; j++) {
      console.log(shortStr[j], longStr[i + j]);
      if (shortStr[j] !== longStr[i + j]) {
        console.log("Break!");
        break;
      }
      if (j === shortStr.length - 1) {
        console.log("Found One!");
        count++;
      }
    }
  }
  return console.log(count);
}

searchStringNaive("lorie loled", "lo");
