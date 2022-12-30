function hello( callback, lastname) {
  console.log( "hello" + callback(lastname) );
}

hello( function(name) {
  return "code" + name;
}, "mafia");

function doSomething( a, b, callback ) {
  const result = callback(a, b);
  console.log( result );
}

function multiply( a, b) {
  return a * b;
}

function plus( a, b) {
  return a + b;
}

doSomething(2, 2, multiply);
doSomething(2, 4, plus);
