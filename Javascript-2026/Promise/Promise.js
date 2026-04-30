// Promise :-

// a promise is a object which represent evenutal completion of async operation

// States:
// pending
// fulfilled
// rejected

// Basic example
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Data received");
    }, 1000);
});

// Interview 
console.log("start");
setTimeout(() => console.log("timeout"), 0);
Promise.resolve().then(() => console.log("promise"));
console.log("end");

// Answer
// start
// end
// promise
// timeout