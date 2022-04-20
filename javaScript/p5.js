function PerfectN(number) {
  let sum = 0,
    mul = 1,
    r = 0;

  while (number != 0) {
    r = number % 10;
    sum = sum + r;
    mul = mul * r;

    number = parseInt(number / 10);
  }
  if (sum == mul) {
    console.log("Perfect Number");
  } else {
    console.log("Not a Perfect Number");
  }
}

console.log(PerfectN(123));
