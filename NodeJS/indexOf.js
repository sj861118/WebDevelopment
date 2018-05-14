const string = 'hello';
const string2 = 'helelelelelello';
const string3 = 'The method then selects elements from the start argument.';

console.log('hel : ', string.indexOf('hel'));
console.log('el : ', string.indexOf('el'));
console.log('elelelel : ', string2.indexOf('el'));
console.log('method : ',string3.indexOf('method'));
console.log('bye : ', string3.indexOf('bye'));

// hel :  0
// el :  1
// elelelel :  1
// method :  4
// bye :  -1
