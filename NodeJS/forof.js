const userList = [
  {name : 'A', age : 30, score : 85},
  {name : 'B', age : 22, score : 96},
  {name : 'C', age : 41, score : 31},
  {name : 'D', age : 68, score : 65},
];

for(const user of userList){
  console.log('user : ', user);
}

// user :  { name: 'A', age: 30, score: 85 }
// user :  { name: 'B', age: 22, score: 96 }
// user :  { name: 'C', age: 41, score: 31 }
// user :  { name: 'D', age: 68, score: 65 }
