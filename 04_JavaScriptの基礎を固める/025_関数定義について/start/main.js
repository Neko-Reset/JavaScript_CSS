// 通常の関数 エラーにならない
const returnV = hello("いえーい", 20);
console.log(returnV);

function hello(name, age) {
  console.log( "hello" + name + age);
  return name + age;
}

// 関数を変数に宣言した場合エラー
const returnValue = hello("いえーい", 20);
console.log(returnValue);

const hello = function (name, age) {
  console.log( "hello" + name + age);
  return name + age;
}
