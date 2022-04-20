// Take a string input and find out the frequency of characters.
// Example: aaabb33cddd
// a occurred 3 times ,b occurred 2 times ,c occurred 1 times ,d occurred 3 times ,3 occurred 2 times

function frequency(str) {
  var obj = {};
  for (var i = 0; i < str.length; i++) {
    var char = str[i];
    if (obj[char]) {
      obj[char]++;
    } else {
      obj[char] = 1;
    }
  }
  return obj;
}

for (const [key, value] of Object.entries(frequency("aaabb33cddd"))) {
  console.log(key + " occured: ", value + " times"); // key ,value
}
