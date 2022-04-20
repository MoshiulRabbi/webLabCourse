// Take a string input and find out the frequency of characters.
// Example: aaabb33cddd
// a occurred 3 times ,b occurred 2 times ,c occurred 1 times ,d occurred 3 times ,3 occurred 2 times

// function freq(str) {
//   var obj = {};

//   for (var i = 0; i < str.length; i++) {
//     ch = str[i];
//     if (obj[ch]) {
//       obj[ch]++;
//     } else {
//       obj[ch] = 1;
//     }
//   }
//   return obj;
// }

// console.log(freq("aaabb33cddd"));

// function palin(str) {
//   var rstr = str.split("").reverse().join("");
//   if (rstr == str) {
//     console.log("Palindrome");
//   } else {
//     console.log("Not palindrome");
//   }
// }

// palin("boob");

// function p(s) {
//   var rs = s.split("").reverse().join("");
//   if (s == rs) {
//     console.log("apl");
//   } else {
//     console.log("sfd");
//   }
// }

// p("madadm");

//leap

// function leap(y) {
//   if (y % 4 == 0) {
//     console.log("leap");
//   } else {
//     console.log("not");
//   }
// }

// leap(2000);

//substring

// function ss(s, d) {
//   if (s.includes(d)) {
//     console.log("yes");
//   } else {
//     console.log("no");
//   }
// }

// ss("aaabc", "bsc");

//perf

function perf(n) {
  var s = 0,
    m = 1,
    r = 0;
  while (n != 0) {
    r = n % 10;
    s = s + r;
    m = m * r;

    n = parseInt(n / 10);
  }
  if (s == m) {
    console.log("t");
  } else {
    console.log("f");
  }
}

perf(1223);
