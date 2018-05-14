const printHello = () => console.log('hello');

try{
  printHello('hello');
} catch(e){
  console.log('error:',e);
} finally{
  console.log('finally 1');
}

try{
  printMessage('hello');
} catch(e){
  console.log('error:',e);
} finally{
  console.log('finally 2');
}


// hello
// finally 1
// error: ReferenceError: printMessage is not defined
//     at Object.<anonymous> (D:\GitHub\WebDevelopment\NodeJS\trycatch.js:12:3)
//     at Module._compile (module.js:652:30)
//     at Object.Module._extensions..js (module.js:663:10)
//     at Module.load (module.js:565:32)
//     at tryModuleLoad (module.js:505:12)
//     at Function.Module._load (module.js:497:3)
//     at Function.Module.runMain (module.js:693:10)
//     at startup (bootstrap_node.js:188:16)
//     at bootstrap_node.js:609:3
// finally 2
// finish
