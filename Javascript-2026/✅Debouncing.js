// Debouncing and Throttling

// | Concept    | Meaning |
// | ---------- | --------------------- |
// | Debouncing | Wait until user stops |
// | Throttling | Run once every X time |


// 🟢 Debouncing
// Debouncing is a optimization technique used to limit how many times a function runs — especially when something happens repeatedly in a short time.

// ➡️ Real Life Example

// Imagine you go to a lift(elevator) and press the button 10 times quickly —
// the lift should not come 10 times, it should come only once.

// Debouncing ensures that even if the button is pressed many times, the action happens only after the user stops pressing.

// 🟢 Where it’s used in frontend?

// 1)Search bar typing	----> Don’t call API after every keypress
// 2)Window resize	----> Avoid too many re - layout calculations
// 3)Button click ----> Prevent double or accidental multiple clicks
// 4)Form validation ----> Validate only when user stops typing

function debounce(func, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

const handleInput = debounce((text) => {
    console.log("Searching for:", text);
}, 500);

document.getElementById("search").addEventListener("input", (e) => {
    handleInput(e.target.value);
});


// --------------------------------------------------------------------------

let count = 0

function debouncing(fn, delay) {
    let timerr;
    return function (...args) {
        clearTimeout(timerr)
        timerr = setTimeout(() => {
            fn.apply(this, args)
        }, delay)
    }
}


const handleBtnClick = debouncing(() => {
    console.log(`button clicked ${count} times`)
    count = 0
}, 500)

document.getElementById("btn").addEventListener("click", () => {
    count++;
    console.log("button clicked", count)
    handleBtnClick()
})


// ⭐ How to Say It in Interview(Perfect Answer):

// "By default, debounce will still call the API if a user types slowly with pauses longer than the delay.

// To improve the UX, we typically add rules such as:

// Minimum characters before API call
// Combining debounce with throttle
// Caching previous results
// This ensures the app behaves well for both fast and slow typers.