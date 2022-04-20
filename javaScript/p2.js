// Take a string input. Determine whether it is palindrome or not.
// EXAMPLE: Palindrome is a sequence of characters which is remains
// same if we reverse it i.e. MADAM
function palin(str) {
  var rstr = str.split("").reverse().join("");
  if (rstr == str) {
    console.log("Palindrome");
  } else {
    console.log("Not palindrome");
  }
}

palin("MADAM");
