// Take two strings and find out whether the second string is a SUBSTRING of the first string or not.
//Exaplem:
// input:  Abbbbbbccc, ccc
//output: true

function subs(s1, s2) {
  if (s1.includes(s2)) {
    console.log("Substring");
  } else {
    console.log("Not a Substring");
  }
}
console.log(subs("Abbbbbbccc", "ccc"));
