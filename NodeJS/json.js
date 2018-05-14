//json = javascript object notation
const user = {};
user.name = 'sangjun';
user.age = 33;

console.log(user);
console.log(user.name);


const user2 = {name:'juhee', age:30};
console.log(user2);

user.job = 'developer';
user.nation = 'korea';

console.log(user);

const memberName = 'age';
console.log(user[memberName]);

// { name: 'sangjun', age: 33 }
// sangjun
// { name: 'juhee', age: 30 }
// { name: 'sangjun', age: 33, job: 'developer', nation: 'korea' }
// 33
