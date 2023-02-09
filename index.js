function sumItems(array) {
  let sum = 0;
  for (num of array) {
    if (!Array.isArray(num)) {
      sum += num;
    } else {
      sum += sumItems(num);
    }
  }
  return sum;
}

// console.log(sumItems([1, 2, 3, 4, 5]));
console.log(sumItems([[[5], [[[4]]], [[3], 2]], 1, []])); // 15
module.exports = sumItems;
