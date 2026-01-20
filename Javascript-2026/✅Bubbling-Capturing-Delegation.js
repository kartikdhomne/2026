// 🟢🔴🟢 Event Propagation

// Event propagation is the process that defines how an event travels through the DOM when something happens(like a click, keypress, etc.).

// 👉 When you click an element, the browser decides which elements get notified and in what order.

// 🟢🔴🟢 Event Bubbling
// Event bubbling is a DOM event mechanism where an event starts on the target element and then propagates upward through its parent elements up to the document.

// Event bubbling means when an event occurs on an element, it first runs on that targeted element and then moves up to its parent, grandparent, and so on.

// It is default behavior

// 🟢🔴🟢 Event Capturing
// Event Capturing is a DOM event mechanism where an event starts on the target parent element first and then propagates downwards through its child elements up to the document.

// Event Capturing means when an event occurs on an element, it first runs on that targeted parent element and then moves up to its child, grandchild, and so on.

// 🟢🔴🟢 use e.stopPropagation to stop event propagating to target element

// 🟢🔴🟢 Event Delegation
// Event delegation is a technique where you attach one event listener to a parent element and handle events from its child elements using event bubbling.

const div = document.querySelector(".div");
const form = document.querySelector(".form");
const button = document.querySelector(".btn");

div.addEventListener(
    "click",
    function (e) {
        e.stopPropagation(); // To stop Propagation
        alert("div clicked");
    },
    // Only to show capturing
    {
        capture: true,
    }
);
button.addEventListener(
    "click",
    function (e) {
        e.stopPropagation(); // To stop Propagation
        alert("button clicked");
    },

    // Only to show capturing
    {
        capture: true,
    }
);
form.addEventListener(
    "click",
    function () {
        alert("form clicked");
    },
    // Only to show capturing
    {
        capture: true,
    }
);

// div.addEventListener("click", func);
// button.addEventListener("click", func);
// form.addEventListener("click", func);

// function func(event) {
//     alert("CurrentTarget = " + event.currentTarget.tagName + ", target = " + event.target.tagName + ", this = " + this.tagName)
// }

// Event Delegation
document.getElementById("actions").addEventListener("click", (e) => {
    const button = e.target.closest("button");
    if (button) {
        alert(`You clicked on ${button.className}`);
    }
});


//Event Delegation Modal Popup
const container = document.querySelector(".modalContainer");
const buttonn = document.querySelector(".modalButton");

buttonn.addEventListener("click", () => {
    toggleModal(true)
})

function toggleModal(toggle) {
    container.style.display = toggle ? "flex" : "none"
}

container.addEventListener("click", (e) => {
    if (e.target.className === "modalContainer") toggleModal(false)
})