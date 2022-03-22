function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}
// above all are Helper Functions for Radix Sort

// main function

function radixSort(nums) {
  let digitMax= mostDigits(nums);
  for (let k = 0; k < digitMax; k++) {
    let digitBuckets = Array.from({length: 10},()=>[])
    for (let i = 0; i < nums.length; i++) {
      let digit= getDigit(nums[i],k)
      digitBuckets[digit].push(nums[i])
    }
    nums= [].concat(...digitBuckets)
  }
  return nums;
}


radixSort([23,11,22,36,2,1,36,2345,9852])
