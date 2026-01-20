//🔴🟢🔴 IIFE :- An IIFE (Immediately Invoked Function Expression) is a function that is executed immediately after its definition.

// 🔴🟢🔴 example 1
(function () {
    console.log("IIFE executed!");
})();

// 🚀 Why use ()?
// The first () wraps the function, making it an expression.
// The second () invokes the function immediately.

// 🔴🟢🔴 example 2 :- IIFE with Parameters
(function (name) {
    console.log(`Hello, ${name}!`);
})("Kartik");

// 🔴🟢🔴 example 3 :- IIFE with Arrow Functions
(() => {
    console.log("Arrow function IIFE!");
})();
// //  or
((name) => console.log(`Hello, ${name}!`))("Kartik");

// 🔴🟢🔴 example 4 :- IIFE with Private Variable
(function () {
    let appName = "MyApp"; // Private variable
    console.log(`App Name: ${appName}`);
})();
// console.log(typeof appName); // undefined (appName is not in the global scope)

// 🔴🟢🔴 example 4 :- IIFE with Fetched data
(async function fetchData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const data = await response.json();
  console.log("Fetched Data:", data);
})();

// 🔴🟢🔴Usecases :-
// Avoiding Global Scope Pollution
// Module Pattern :- Encapsulates private data and exposes only needed methods.
// Running Code Immediately
// Fetching Data (Async IIFE)

// 🔴🟢🔴Final Thoughts
// 🔴IIFE was widely used before ES6 modules (import/export).
// 🔴Still useful for asynchronous functions, private data, and initialization.
// 🔴Modern Alternative? ES6 Modules (import/export) provide similar benefits in a structured way.
