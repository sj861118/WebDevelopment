const number = 9;

for (let i = 0; i < number; i++) {
  console.log(number * i);
}

const studentList = [
  {name : 'A', age : 30, score : 85},
  {name : 'B', age : 22, score : 96},
  {name : 'C', age : 41, score : 31},
  {name : 'D', age : 68, score : 65},
];

let resultStudent = '';

for(let index = 0; index <studentList.length; index ++){
  if(studentList[index].name === 'B'){
    resultStudent = studentList[index];
    break;
  }
  console.log(studentList[index].name, '은 B가 아닙니다.');
}

console.log('resultStudent : ', resultStudent);

// 0
// 9
// 18
// 27
// 36
// 45
// 54
// 63
// 72
// A 은 B가 아닙니다.
// resultStudent :  { name: 'B', age: 22, score: 96 }
