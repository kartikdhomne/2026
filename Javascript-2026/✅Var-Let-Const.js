// Topic :- Var, Let, Const

// Var :-
// 1) Var is Global or function scope variable
// 2) Var variable get hoisted and undefined value is assigned
// 3) It was first variable introduced before ES6
// 4) Variable can be called before assigning value
// 5) Var variable can be reassigned and redeclared

// Let :-
// 1) let is block-scoped (inside {}, loops, if, functions)
// 2) let gets hoisted but NOT initialized (Temporal Dead Zone)
// 3) Introduced in ES6 (2015)
// 4) let variable CANNOT be accessed before initialization (ReferenceError)
// 5) let can be re-assigned but CANNOT be redeclared in the same scope

// Const :-
// 1) const is block-scoped (same as let)
// 2) const gets hoisted but NOT initialized (Temporal Dead Zone)
// 3) Introduced in ES6 (2015)
// 4) const variable MUST be initialized at the time of declaration
// 5) const CANNOT be re-assigned or redeclared
// 6) For const objects/arrays → reference can't change but values CAN mutate

// ***************** Examples ********************

// Example 1
// if (true) {
//     var x = 10;
//     let y = 30;
//     const z = 99;
// }
// console.log(x); // 10 → accessible outside block
// console.log(y); // Reference Error (cannot access)
// console.log(z); // Reference Error (cannot access)

// Example 2
// console.log(a); // undefined (not error)
// console.log(b); // ReferenceError
// console.log(c); // ReferenceError
// const c = 5;
// let b = 6;
// var a = 7;

//Example 3

var p = 10;
var p = 20;
console.log(p); // 20

// let m = 10;
// m = 20;
// let m = 30; // ❌ SyntaxError: Identifier 'm' has already been declared

// const r = 100;
// r = 200; // ❌ TypeError
// const r = 300; // ❌ SyntaxError


// Example 4
function demo() {
    if (true) {
        var a = "I am var";
        let b = "I am let";
        const c = "I am const";
    }
    console.log(a); // ✅ Accessible (function-scoped)
    console.log(b); // ❌ ReferenceError (block-scoped)
    console.log(c); // ❌ ReferenceError (block-scoped)
}
demo();

// var can access value outside block but not outside function
// var can access value within block but not let and const
// inside function neither var nor let const access value outside

// var can be accessed outside the block but ONLY inside the function
// let and const CANNOT be accessed outside the block

// ALSO:
// Outside the function, NONE of them (var, let, const) can be accessed
// because all three are limited to the function they were declared in.

// | Scope Type                     | var   | let | const |
// | ----------------------------   | ----- | ----- | ----- |
// | Block scope                   | ❌ No | ✔ Yes | ✔ Yes |
// | Function scope                | ✔ Yes | ✔ Yes | ✔ Yes |
// | Accessible outside function? | ❌ No | ❌ No | ❌ No |
