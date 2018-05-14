const printHello = () => console.log('hello'); // {} 안써도 됨
const printHello2 = () => 'hello' // return hello
const printMessage = message => console.log(message);
const plus = (a,b) => a+b;
const minus = (a,b) => a-b;

printHello();
console.log(printHello2());
printMessage('message');
console.log('plus : %d',plus(10,20));
console.log('minus : %d', minus(20,10));

const sumAndPrint = (a,b) => {
  const result = a+b;
  return `결과는 ${result} 입니다.`
}

const result = sumAndPrint(10,20);
console.log(result);

\
