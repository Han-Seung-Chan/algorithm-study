function solution(arr) {
  const sum = arr.reduce((acc, cur) => acc + cur, 0);

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let faker = arr[i] + arr[j];

      if (sum - faker === 100) {
        arr.splice(i, 1);
        arr.splice(j - 1, 1);

        return arr;
      }
    }
  }
}
console.log(solution([20, 7, 23, 19, 10, 15, 25, 8, 13]));
