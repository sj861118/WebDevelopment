const userList = [
  {name : 'A', age : 30, score : 85, score2 : 42},
  {name : 'B', age : 22, score : 96, score2 : 15},
  {name : 'C', age : 41, score : 31, score2 : 75},
  {name : 'D', age : 68, score : 65, score2 : 99},
];

const plus = (a,b) => a+b;
userList.forEach(userList=>console.log(`${userList.name} total : ${plus(userList.score, userList.score2)}`));
console.log('==================');

userList.forEach((userList) => {
  console.log(`${userList.name} total : ${plus(userList.score, userList.score2)}`);
});
