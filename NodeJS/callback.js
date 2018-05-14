const sum = (a,b) => a+b;

const PrintResult = (result) =>{
  console.log(`결과는 ${result} 입니다.`);
};

const calcAndPrint = (calcResult, callback) => {
  callback(calcResult);
}

calcAndPrint(sum(10,20), PrintResult);
