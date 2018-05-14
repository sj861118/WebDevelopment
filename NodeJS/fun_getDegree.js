const students = [
  {name : 'A', age : 30, score : 85},
  {name : 'B', age : 22, score : 96},
  {name : 'C', age : 41, score : 31},
  {name : 'D', age : 68, score : 65},
];

getDegree = (score) =>{
  if(score >= 90){
    return 'A';
  } else if(score >= 80){
    return 'B';
  } else if(score >= 70){
    return 'C';
  }
  return 'F';
}

students.forEach((student) =>{
  const result = `name:${student.name}, score:${getDegree(student.score)}`;
  console.log(result);
})
