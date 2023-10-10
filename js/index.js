// // alert("Hello World");
// // document.write("<h1>Hello World</h1>");
// // const p = document.getElementById("para");
// // p.innerHTML = "<h1>Hello World APP</h1>";

// // var a = 10; //number
// // var name = "Abc"; //string
// // var isTrue = true;//
// // var person = {
// //   //object
// //   name: "Name One",
// //   age: 25,
// //   Gender: "Male",
// // };
// // person["name"] = "Name One";
// // const persons = [
// //   ["name", "name One"],
// //   ["age", 25],
// // ];
// // console.log(persons[0][0]);
// // var cars = ["Cars", "Car2", "Car3", "Car4"]; //array of string ["name", 1,"name",true]
// // var a = 10;
// // var b = 25;
// // var c = a + b;
// // // 10 + 20; // 30
// // console.log(c);
// // var a10 = "Hello";
// // var car_name = "Car One";
// // var c10 = "Hello";
// // var c23 = "Hll";
// // // charecter special charecters _ $
// // var _abc = "hi";
// // var $abc = "hello";
// // var A = 20;
// // operators;
// // +,-,*,/,%,**, ++,--
// // var b = a--;
// // console.log(a);
// // console.log(b);

// let d = 10;
// let e = d--;
// console.log(d);
// console.log(e);
// // a = a + 30;
// // a += 30;
// // console.log(a);
// // // conditional operator
// // var bcd = b === 25 ? "Its 25" : "No Idea";
// // console.log(bcd);
// // var name = "abc";
// // var name1 = "abc1";
// // var newName = 10 + 5 + name;
// // console.log(newName);
// // var cond = a === 10 || b === 25;
// // var boolVal = false;
// // console.log(!boolVal);
// // console.log(typeof a10);
// // console.log(typeof A);
// // console.log(typeof cars);
// // console.log(person instanceof Array);

// // class Car {}

// // const c12 = new Car();

// // console.log(c12 instanceof Car);

// function sayHello(msg) {
//   return msg;
// }

// var msg = sayHello("Hello Javascript");
// console.log(msg);
// sayHello("Hello Php"); // argument

// function add(a = 1, b = 1) {
//   return a + b;
// }
// // ... rest operator
// function add(...val) {
//   var sum = 0;
//   for (var i = 0; i < val.length; i++) {
//     sum += val[i];
//   }
//   return sum;
// }

// console.log(add(1));
// console.log(add(1, 2));
// console.log(add(1, 2, 4, 5, 6, 7));

// let sum = add(3);
// console.log(sum);

// const person = {
//   "first name": "Person Name",
//   "last name": "Person Last Name",
//   age: 25,
//   "home address": {
//     city: "City",
//     state: "State",
//   },
//   fullName: function () {
//     return this["first name"] + " " + this["last name"];
//   },
// };
// console.log(person.fullName());
// // console.log(person["age"]);
// // console.log(person.age);
// // console.log(person["home address"]["city"]);

// // const per

// const name = "name10 10 11";
// const name1 = "name12";
// const arr = [1, 2, 3];
// console.log(name.length);
// console.log(name.slice(2, 4));
// console.log(name.substring(2, 4));
// console.log(name.substr(2, 3));
// // substring();
// // substr()

// // phone number = /[0-9]{10}$/
// // username = /[A-Z a-z] *\s{2} [A-za-z]{2}*/

// var newName = name.replace(/10/g, "11");
// console.dir(name);
// console.log(newName);
// console.log(name.toLowerCase());

// const nameConCat = name.concat(" ", name1);
// console.log(nameConCat);
// console.log(name.trimEnd());
// console.log(name.charCodeAt(1));
// console.log(name.split(" "));
// console.log(arr.join(" "));
// console.log(name.indexOf("10", 6));
// console.log(name.lastIndexOf("10"));
// console.log(name.includes("11", 6));
// console.log(name.startsWith("1", 10));
// console.log(name.endsWith("0"));
// var x = 4;
// var str = x.toString();
// parseInt(str);
// console.log(y);
var c = 10;
{
  let a = 10;
  a = 20;
  c = 30;
  const b = 10;
  console.log(a, b, c);
}
console.log(c);

const arr = [18, 12, 23, 4];
const counter = arr.reduce((prevcount, currentValue) => {
  return prevcount + currentValue;
}, 0);
console.log(counter);

arr.forEach((value, index, arr) => {
  console.log(value, index);
});
var sum = 0;
for (var i = 0; i < arr.length; i++) {
  sum += arr[i];
}
console.log(sum);

// const arrDouble = [];

// for (let i = 0; i < arr.length; i++) {
//   arrDouble.push(arr[i] * 2);
// }

// console.log(arrDouble);

// const arrDouble = arr.map((val) => val * 2);
// console.log(arrDouble);
// const filterValue = [];
// for (var i = 0; i < arr.length; i++) {
//   if (arr[i] < 4) {
//     filterValue.push(arr[i]);
//   }
// }

// console.log(filterValue);
// arr.filter(currentValue,index,arr)=> {})
// const filterVal = arr.filter((val) => val < 4);
// console.log(filterVal);

// const MaxValue = arr.reduce((prevValue, currentValue) => {
//   return prevValue < currentValue ? prevValue : currentValue;
// }, Number.MAX_VALUE);

// console.log(MaxValue);
// if (a < 10) {
//   //
//   console.log("a is less than 10");
// } else {
// }

// function helloworld(msg) {
//   return msg;
// }
// const sum1 = (a, b) => {
//   return a + b;
// };
// console.log(sum1(1, 2));
// const helloworld = (msg) => msg;

// // const hello = function () {
// //   console.log("hello");
// // };
// // hello();

// // const hello = () => {
// //   console.log("Hello");
// // };

// const hello = () => console.log("Hello");

// console.log(helloworld("Hello World"));
// const msg = helloworld("Hi World");
// console.log(msg);

// const sum1 = (a, b) => a + b;
// const subs = (a, b) => b - a;

// const HigherFunction = (a, b, cb) => {
//   const val = cb(a, b);
//   return val;
// };

// console.log(HigherFunction(2, 3, sum1));
// console.log(HigherFunction(2, 3, subs));

function Counter() {
  let count = 0;
  return function (element = 1) {
    count += element;
    return count;
  };
}

const count = Counter();
console.log(count());
console.log(count(3));
console.log(count(5));

console.log(count()); //1
