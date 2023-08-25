// Kiểm tra chuỗi đối xứng

const checkPalindrome = string => {
  let isPalindrome = true;
  const middlePoint = (string.length - (string.length % 2)) / 2;
  for (let i = 0; i <= middlePoint; i++) {
    if (string[i] !== string[string.length - 1 - i]) {
      isPalindrome = false;
      break;
    }
  }
  return isPalindrome;
};

console.log(checkPalindrome('amt12tma'));
console.log(checkPalindrome('amt131tma'));
