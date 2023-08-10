// const a = [23, 45, 16, 37];
// const b = [12, 45, 18, 14];

// let count = 0;
// let result = 0;
// let arr = [];
// for (let i = 0; i < a.length && i < b.length; i++) {
//   if (a[i] > b[i]) {
//     count++;
//   } else if (a[i] === b[i]) {
//     count = count + 0;
//   } else {
//     result++;
//   }
// }
// arr.push(count, result);
// console.log(arr);

let arr = [
  [1, 2, 3],
  [5, 6, 7],
  [8, 9, 4],
];
sum = [];
for (let i = 0; i < arr.length; i++) {
  for (let j = arr.length - 1; j >= 0; j--) {
    sum.push(arr[i][j]);
    console.log(arr[i][j]);
  }
}
console.log(sum);
