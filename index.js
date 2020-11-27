function map(arr, func) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(func(arr[i]));
  }
  return newArr;
}

function reduce(arr, func, start) {
  let value = !!start ? start : arr[0];
  let i = !!start ? 0 : 1;
  for (; i < arr.length; i++) {
    value = func(value, arr[i]);
  }
  return value;
}
