if(true){
  console.log('true');
}

const score = 85;

let degree = '';

if(score >= 90){
  degree = 'a';
}else if(score >= 80){
  degree = 'b';
}else if(score >= 70){
  degree = 'c';
}else {
  degree = 'f';
}

console.log('degree : ', degree);

// true
// degree :  b
