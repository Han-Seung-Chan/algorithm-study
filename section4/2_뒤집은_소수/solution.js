function solution(arr) {
  let answer;
  let reversedNumberArray = [];
  arr.forEach((item) => {
    let reversedText = '';
    item
      .toString()
      .split('')
      .reverse()
      .forEach((item) => (reversedText += item));
    reversedNumberArray.push(Number(reversedText));
  });
  console.log(reversedNumberArray);
  answer = reversedNumberArray.filter((item) => {
    if (item === 1) return false;
    console.log(Math.sqrt(item));
    for (let i = 2; i <= Math.sqrt(item); i++) {
      if (item % i === 0) return false;
    }
    return true;
  });
  return answer;
}
console.log(solution([32, 55, 62, 20, 250, 370, 200, 30, 100]));
