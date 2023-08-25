const vowels = ['e', 'u', 'o', 'a', 'i'];

const countVowels = string => {
  const stringArr = Array.from(string);
  const vowelsQuantity = stringArr.reduce((sum, char) => {
    const isVowel = vowels.includes(char);
    if (isVowel) {
      sum++;
    }
    return sum;
  }, 0);
  return vowelsQuantity;
};

console.log(countVowels('anh hung xa dieu'));
