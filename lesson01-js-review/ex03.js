const removeDuplicateFromArray = array => {
  if (array.length <= 1) return 'Dữ liệu đầu vào không hợp lệ';
  let outputArray = [];
  for (let i = 0; i < array.length; i++) {
    const isDuplicate = outputArray.some(item => item === array[i]);
    if (!isDuplicate) {
      outputArray.push(array[i]);
    }
  }
  return outputArray;
};

console.log(removeDuplicateFromArray([2, 6, 6, 2, 1, 'a', 'a', 'b']));
console.log(removeDuplicateFromArray('hello'));
