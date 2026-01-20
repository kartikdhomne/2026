console.log("Start");
setTimeout(() => {
    console.log("Timeout");
});
Promise.resolve().then(() => console.log("Promise"));
console.log("End"); // Start, End, Promise, Timeout.


// "Start" is logged first because it's a synchronous operation.
// Then, "End" is logged because it's another synchronous operation.
// "Promise" is logged because Promise.resolve().then() is a microtask and
// will be executed before the next tick of the event loop.
//     Finally, "Timeout" is logged.Even though it's a setTimeout with a
// delay of 0 milliseconds, it's still a macrotask and will be executed in
// the next tick of the event loop after all microtasks have been
// executed.
