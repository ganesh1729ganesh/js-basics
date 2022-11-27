// json = objects

// alt to for loop

//map =>  executes a function one by one

// const person_details = {
//   name: "ganesh",
//   surname: "maddhala",
//   age: 24,
//   cartoons_liked: ["shinchan", "naruto"],
//   schools: [
//     {
//       classes: "1-6",
//     },
//     {
//       name: "Modi school",
//       classes: "6-12",
//     },
//   ],
// };

// console.log(person_details);
// npm i = install libraries
//Error Handling

// try {
//   const a = 10;
//   a = 11;

//   throw new Error("a is const");
// } catch (err) {
//   console.log(err);
// }

//npm init => creates a nodejs project

var cowsay = require("cowsay");

console.log(
  cowsay.say({
    text: "Ganesh is coding",
    e: "oO",
    T: "p ",
  })
);
