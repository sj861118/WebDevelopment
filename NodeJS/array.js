// create
const numbers = [1,2,3];
const strings = ['hello','bye','welcome'];

const numbers2 = new Array(1,2,3);
const strings2 = new Array('hello', 'bye', 'welcome');

console.log('numbers : ', numbers);
console.log('numbers2 : ', numbers2);
console.log('strings : ', strings);
console.log('strings2 : ', strings2);

// set values
const arNumbers = [];
arNumbers.push(1);
arNumbers.push(2);
arNumbers.push(3);

const arTexts = [];
arTexts.push('hello','welcome','bye');

console.log(arNumbers);
console.log(arTexts);

//print
const arCoffee = [];
console.log(arCoffee[0]);
console.log(arCoffee.length);

arCoffee.push('americano','latte','capucino');
console.log(arCoffee[0]);
console.log(arCoffee.length);


// numbers :  [ 1, 2, 3 ]
// numbers2 :  [ 1, 2, 3 ]
// strings :  [ 'hello', 'bye', 'welcome' ]
// strings2 :  [ 'hello', 'bye', 'welcome' ]
// [ 1, 2, 3 ]
// [ 'hello', 'welcome', 'bye' ]
// undefined
// 0
// americano
// 3
