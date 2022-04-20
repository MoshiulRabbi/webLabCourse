// Take an integer input and print YES if the multiplication of all the digits is equal to the summation of all the digits.
// EXAMPLE:
// input: 123
// output: YES

function PN(no) {
  let sum = 0,
    mul = 1,
    r = 0;

  while (no != 0) {
    r = no % 10;
    sum = sum + r;
    mul = mul * r;
    no = parseInt(no / 10);
  }
  console.log(mul);
  if (sum == mul) {
    console.log("perfect");
  } else {
    console.log("not");
  }
}
nn = Number(123);
console.log(PN(nn));
