//전역
let resultSubtraction;
function subtraction(a,b){
  resultSubtraction = a-b;
}

subtraction(100,50);
console.log(resultSubtraction);

function multiple(a,b){
  const result = a*b;
  return result;
}

const r = multiple(10,10);
console.log(r);

//지역
function sum(a,b){
  const resultSum = a+b;
  g_resultSum = a+b; // 변수 유형에 let이나 var를 쓰지 않고 선언시 전역변수가 된다.
}

sum(20,40);
console.log(g_resultSum);
console.log(resultSum);
