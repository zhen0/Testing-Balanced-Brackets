// BALANCED BRACKETS

// Write a FUNCTION that takes in a STRING made up of BRACKETS ("(", "[", "{") and other optional characters.
//
// The function should RETURN A BOOLEAN representing whether or not the string is balanced
// in regards to brackets.
//
// A string is said to be BALANCED IF it has as many opening brackets of a given type as it has closing brackets of that type and if no bracket is unmatched.
//
// Note that a closing bracket cannot match a corresponding opening bracket that comes after it.
//
// Similarly, brackets cannot overlap each other as in '[(])'

function balancedBrackets(str) {
  opening = ["[", "(", "{"];
  closed = ["]", ")", "}"];
  if (str.length <= 1) {
    return false;
  }

  for (let i = 0; i < str.length; i++) {
    let ele = str[i];
    if (closed.includes(ele)) {
      let indofClosed = closed.indexOf(ele);
      if (str[i - 1] != opening[indofClosed]) {
        return false;
      } else if (!str[i + 1]) {
        return true;
      } else {
        let end = str.slice(i + 1);
        let begin = str.slice(0, i - 1);
        newStr = begin + end;
        return balancedBrackets(newStr);
      }
    }
  }
}

module.exports = balancedBrackets;
