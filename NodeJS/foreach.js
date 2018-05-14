const userList = [
  {name : 'A', age : 30, score : 85},
  {name : 'B', age : 22, score : 96},
  {name : 'C', age : 41, score : 31},
  {name : 'D', age : 68, score : 65},
];

userList.forEach(function(user){
  console.log(user);
});

console.log('------------------------------');

userList.forEach(user => console.log(user));


// { name: 'A', age: 30, score: 85 }
// { name: 'B', age: 22, score: 96 }
// { name: 'C', age: 41, score: 31 }
// { name: 'D', age: 68, score: 65 }
// ------------------------------
// { name: 'A', age: 30, score: 85 }
// { name: 'B', age: 22, score: 96 }
// { name: 'C', age: 41, score: 31 }
// { name: 'D', age: 68, score: 65 }
