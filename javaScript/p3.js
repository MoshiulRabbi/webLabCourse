// Write the LEAPYEAR( ) function to determine
// whether the input year is leap year or not.

function LEAPYEAR(n) {
  if ((n % 4 == 0 && n % 100 != 0) || n % 400 == 0) {
    console.log("Leap year");
  } else {
    console.log("Not a leap year");
  }
}

console.log(LEAPYEAR(2004));
