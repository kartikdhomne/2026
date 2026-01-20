// Currying :-
// Function currying is a technique where a function that takes multiple arguments is transformed into a series of functions, each taking one argument at a time.

//Normal function
function add(a, b, c) {
    return a + b + c;
}
// console.log(add(2, 5, 10))

//Currying Function
function add(a) {
    return function (b) {
        return function (c) {
            return a + b + c
        }
    }
}
console.log(add(2)(3)(10))

//Practical Usecase:-
//lets suppose I am getting a from some api, b from other api and c is user typed then what we can do is we can gather all 3 variables via defining them with let but it is not scalable because what if we have 100 or 1000s of variable or parameters coming from api,

// How to achieve this with Currying
// function add(a) {
//     return function (b) {
//         return function (c) {
//             return a + b + c
//         }
//     }
// }
// console.log(add(4)(5)(11))

// Main thing to notice any one parameter which is missing can't execute function call until all parameter are presents.


// Pratical use case
// lets suppose we are buildin a email server in which we receive response from api

// function sendAutoEmail(to) {
//     return function (subject) {
//         return function (body) {
//             console.log(`Sending email to : ${to} with subject : ${subject} and ${body} `)
//         }
//     }
// }

const sendAutoEmail = (to) => (subject) => (body) =>
    console.log(`Sending email to: ${to} with subject: ${subject} and body: ${body}`);

// Step 1: provide the recipient email
let step1 = sendAutoEmail("kartikdhomne@gmail.com");

// Step 2: provide the subject
let step2 = step1("New Order Confirmation");

// Step 3: provide the body and send the email (log it)
step2("Hey Kartik, Here is something for you");