const randomNum = Math.random();
const zeroToNine = Math.floor(Math.random() * 10, 10);
const twentyToThirty = Math.floor(Math.random()*((30-20)+1),10)+20;
const oneToTen = Math.floor(Math.random() * 10, 10)+1;
const makeRandom = (min, max) => Math.floor(Math.random() * ((max - min)+1,10)+min);

console.log(randomNum);
console.log(zeroToNine);
console.log(twentyToThirty);
console.log(oneToTen);
for(let val = 1; val < 10; val++){
  console.log(makeRandom(10,20));  
}
