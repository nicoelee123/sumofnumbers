function sumFor(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

function sumWhile(array) {
  let sum = 0;
  let i = 0;
  while (i < array.length) {
    sum += array[i];
    i++;
  }
  return sum;
}

function sumRecursion(array) {
  if (array.length === 0) {
    return 0;
  }
  const a = array;
  const num = array[0];
  a.shift();
  return num + sumRecursion(a);
}

function sumTheSimpleWay(array) {
  return _.reduce(array, function (memo, num) {
    return memo + num;
  });
}

const testArray = [1, 2, 3, 4, 5];

console.log(sumFor(testArray));
console.log(sumWhile(testArray));
console.log(sumRecursion(testArray));
console.log(sumTheSimpleWay(testArray));
