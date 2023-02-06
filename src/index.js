module.exports = function check(str, bracketsConfig) {
// your solution
str = str.split('');
console.log(str)
function findBrackets() {
  for (let i = 0; i < str.length; i++) {
    bracketsConfig.forEach(item => {
      if (item[0] == str[i] && item[1] == str[i + 1]) {str.splice(i, 2);
        if (bracketsConfig.length > 0) {findBrackets()}};
    });
  }
  return str;
}
findBrackets();
if (str.length > 0) {return false
} else return true;}