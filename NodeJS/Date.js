const today = new Date();
const date1 = new Date(2018,5-1,10);
const date2 = new Date(2018,4,10);
const date3 = new Date(2018,4,10);
const date4 = new Date(2018,4,10,18);
const date5 = new Date(2018,4,10,18,20);
const date6 = new Date(2018,4,10,18,20,30);

console.log(today.toLocaleString());
console.log(date1.toLocaleString());
console.log(date2.toLocaleString());
console.log(date3.toLocaleString());
console.log(date4.toLocaleString());
console.log(date5.toLocaleString());
console.log(date6.toLocaleString());

console.log('date : %s', today.toLocaleString());
console.log('LocaleDateString : %s', today.toLocaleDateString());
console.log('LocaleTimeString : %s', today.toLocaleTimeString());

console.log('Year : %s',today.getFullYear());
console.log('Month : %s',today.getMonth());
console.log('Day : %s',today.getDate());
console.log('Hour : %s',today.getHours());
console.log('Minute : %s',today.getMinutes());
console.log('Second : %s',today.getSeconds());

// YYYY-MM-DD
const getYymmdd = (date) =>{
  const yyyy = date.getFullYear();
  const mm = date.getMonth() < 9 ? `0${date.getMonth()+1}` : (date.getMonth()+1);
  const dd = date.getDate() < 10? `0${date.getDate()}` : date.getDate();
  return `${yyyy}-${mm}-${dd}`;
}

const yymmdd = getYymmdd(new Date());
console.log(yymmdd);

// 2018-5-10 18:51:03
// 2018-5-10 00:00:00
// 2018-5-10 00:00:00
// 2018-5-10 00:00:00
// 2018-5-10 18:00:00
// 2018-5-10 18:20:00
// 2018-5-10 18:20:30
// date : 2018-5-10 18:51:03
// LocaleDateString : 2018-5-10
// LocaleTimeString : 18:51:03
// Year : 2018
// Month : 4
// Day : 10
// Hour : 18
// Minute : 51
// Second : 3
