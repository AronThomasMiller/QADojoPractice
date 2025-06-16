// --------------------------------------------
//                     ЦИКЛИ
// --------------------------------------------
//---------------------
//task 1
//---------------------
// function isEven(number) {
//   if (number % 2 === 0) {
//     console.log("number is even");
//   } else {
//     console.log("number is odd");
//   }
// }

//const { isArray } = require("util")

// isEven(2);

//---------------------
//task2
//---------------------
// function hello(time) {
//   if (time < 12) {
//     console.log("good morning");
//   } else if (time >= 12 && time <= 18) {
//     console.log("good afternoon");
//   } else {
//     console.log("good evening");
//   }
// }

// hello(18)

//---------------------
//task3
//---------------------
// function verifyScore(score) {
//   if (score >= 50) {
//     console.log("test passed");
//   } else {
//     console.log("test failed");

//   }
// }

// verifyScore(42)

//---------------------
//task4
//---------------------
// function canVote(age) {
//   if (age >= 18) {
//     console.log("you can vote");
//   } else {
//     console.log("you can't vote");
//   }
// }

// canVote(11)

// verifyScore(42)

//---------------------
// task5
//---------------------
// function compareNumbers(number1, number2) {
//   if (number1 > number2) {
//     console.log("first number is bigger");
//   } else if (number1 < number2) {
//     console.log("second number is bigger");
//   } else {
//     console.log("the numbers are the same");
//   }
// }

// compareNumbers(1, 3);

//---------------------
// task6
//---------------------
// function trafficLight(color) {
//   if (color === "green") {
//     console.log("go");
//   } else if (color === "yellow") {
//     console.log("prepare");
//   } else {
//     console.log("stop");
//   }
// }

// trafficLight("green");

//---------------------
// task7
//---------------------

// function getNumberType(num) {
//   if (num > 0) {
//     console.log("number is positive");
//   } else if (num < 0) {
//     console.log("number is negative");
//   } else {
//     console.log("number is 0");
//   }
// }
// getNumberType(0);

// --------------------------------------------
//                     МАСИВИ
// --------------------------------------------

//---------------------
// task1
//---------------------

// function isArray(input) {
//   return Array.isArray(input);
// }

// console.log(isArray('QA DOJO'));
// console.log(isArray([1, 2, 4, 0]));

//---------------------
// task2
//---------------------
//version 1

// function cloneArray(arr) {
//   return [...arr]
// }

//version 2

// function cloneArray(arr) {
//   const result = [];
//   for (let i = 0; i < arr.length; i++) {
//     result.push(arr[i]);
//   }
//   return result;
// }

// console.log(cloneArray([1, 2, 4, 0])); // [1, 2, 4, 0]
// console.log(cloneArray([1, 2, [4, 0]])); // [1, 2, [4, 0]]

//---------------------
// task3
//---------------------

// function first(arr, n) {
//   if (n === undefined) {
//     return arr[0];
//   }
//   return arr.slice(0, n);
// }
// console.log(first([7, 9, 0, -2]));
// console.log(first([7, 9, 0, -2],3));

//---------------------
// task4
//---------------------

// function last(arr, n) {
//   if (n === undefined) {
//     return arr[arr.length - 1];
//   }
//   return arr.slice(-n);
// }

// console.log(last([7, 9, 0, -2]));
// console.log(last([7, 9, 0, -2], 3));

//---------------------
// task5
//---------------------
// const myColor = ["Red", "Green", "White", "Black"];
// console.log(myColor.join());
//---------------------
// task6*
//---------------------
//---------------------
// task7*
//---------------------
//---------------------
// task8
//---------------------
// const numbers = [];

// for (let i = 1; i <= 345; i++) {
//   numbers.push(i);
// }

// console.log(numbers);
//---------------------
// task9
//---------------------
// let sum = 0;

// for (let i = 1; i <= 100; i++) {
//   sum += i;
// }

// console.log(sum);
//---------------------
// task10
//---------------------
// const numbers = [];

// for (let i = 241; i >= 1; i--) {
//   numbers.push(i);
// }

// console.log(numbers);

//---------------------
// task11
//---------------------
// function maxNumber(a, b) {
//   if (a > b) {
//     console.log(a);
//   } else if (b > a) {
//     console.log(b);
//   } else {
//     console.log("Both numbers are equal.");
//   }
// }

// maxNumber(10, 20);
// maxNumber(5, 5);
// maxNumber(-10, 0);

//---------------------
//              Обєкти
//---------------------
//---------------------
// task1
//---------------------
// const book = {
//     title: "book name",
//     author: "author name",
//     pages: 1
// };
// console.log("Title:", book.title);
// console.log("Author:", book.author);
// console.log("Pages:", book.pages);

//---------------------
// task2
//---------------------
// book.isAvailable = true;
// console.log("Is Available:", book.isAvailable);

//---------------------
// task3
//---------------------
// const obj = {
//     title: "book name",
//     author: "author name",
//     pages: 1
// };

// function printObject(obj) {
//   for (const key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       console.log(`Ключ: ${key}, Значення: ${obj[key]}`);
//     }
//   }
// }
// printObject(obj)

//---------------------
// task4
//---------------------
// const user = {
//     profile: {
//         email: "mp@gm.com",
//     }
// };
// console.log(user.profile.email);

//---------------------
// task5
//---------------------
// const user = { name: 'Maksym', age: 26 };
// if (user.hasOwnProperty('name')) {
//   console.log('Поле "name" існує');
// } else {
//   console.log('Поле "name" не існує');
// }
//---------------------
// task6
//---------------------
// const obj = { name: 'Maksym', age: 26};
// const countObjProperties = Object.keys(obj).length;
// console.log(`В обєкті ${countObjProperties} властивості(ей).`);

//---------------------
// task7
//---------------------
// const settings = { theme: "light", notifications: true, version: "2.0.0" };
// const settingsCopy1 = { ...settings };
// console.log(settingsCopy1);
//---------------------
// task8
//---------------------
// const settings = { theme: "light", notifications: true, version: "2.0.0" };
// function getValues(obj) {
//   return Object.values(obj);
// }
// console.log(getValues(settings));

