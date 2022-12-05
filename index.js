const fs = require('fs');
const buffer = fs.readFileSync("data.txt");
const input = buffer.toString().split('\n')

let count = 0;

const overlap = (s1, s2) => {
  let [start1, end1] = s1.split('-')
  let [start2, end2] = s2.split('-')
  start1 = Number(start1)
  start2 = Number(start2)
  end1 = Number(end1)
  end2 = Number(end2)

  if (start1 > end2 || end1 < start1) {

    return true;
  }
  return false;
}

input.forEach(pair => {
  const section = pair.split(',');
  const s1 = section[0];
  const s2 = section[1];
  // console.log(s1, s2)

  if (overlap(s1, s2) || overlap(s2, s1)) {
    // console.log(s1, s2)
    count++;
  }
})

console.log(input.length - count)