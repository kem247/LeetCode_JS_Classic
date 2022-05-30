function isPalindrome(s) {
  //Sanitize the input string
  //first arg in replace is what you want to replace
  //Regex: a square bracket will represent a capture group
  //in the brackets it says grab all non-alphanumeric characters
  // _ is in cluding underscores
  s = s.toLowerCase().replace(/[\W_]/g, '');

  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) {
      return false;
    }
    //move the pointers or you'll be in an infinite loop
    left++;
    right--;
  }
  return true;
}

module.exports = isPalindrome;
