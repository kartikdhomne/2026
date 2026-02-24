Promise 
// A Promise is a JavaScript object that represents the eventual completion or failure of an asynchronous operation.It allows us to handle async operations in a structured way, avoiding callback hell.Promises are immutable once settled and support chaining through.then() and.catch() methods.

//     | State     | Meaning |
// | ------------  | -------------------- |
// | 🟡 Pending   | Initial state |
// | 🟢 Fulfilled | Operation successful |
// | 🔴 Rejected  | Operation failed |


// 📌 Why Promises Were Introduced ?

// To solve:

// ❌ Callback Hell
// ❌ Inversion of control
// ❌ Pyramid of doom

// Old code:
const cart = ["shoes", "pants", "kurta"];

createOrder(cart, function (orderId) {
    proceedToPayment(orderId, function (paymentInfo) {
        showOrderSummary(paymentInfo, function () {
            updateWalletBalance();
        });
    });
});

// Problems:

// 1)Nested
// 2)Hard to debug
// 3)Error handling messy


// 📌 Promise Syntax
const promise = new Promise((resolve, reject) => {
    if (success) {
        resolve(value);
    } else {
        reject(error);
    }
});


// 📌 Promise Chaining(Very Important)
// Rule:
// 👉 Always return inside.then()

createOrder(cart)
    .then(orderId => {
        return proceedToPayment(orderId);
    })
    .then(paymentInfo => {
        return showOrderSummary(paymentInfo);
    })
    .then(data => {
        return updateWalletBalance(data);
    });

// Why return?

// Because :
// .then() always returns a new promise
// If you don’t return → next.then() gets undefined




// 📌 Understanding Your Code

// Your flow:

createOrder(cart)
    .then(function (orderId) {
        console.log(orderId, "orderId");
        return orderId;
    })
    .catch(function (err) {
        console.log(err.message);
    })
    .then(function (orderId) {
        return proceedToPayment(orderId);
    })
    .then(function (paymentInfo) {
        console.log(paymentInfo);
    });




// Step - by - step Execution
// 1️⃣ createOrder(cart)
function createOrder(cart) {
    return new Promise(function (resolve, reject) {
        if (!validateCart(cart)) {
            reject("failed");
        }

        const orderId = "12345";

        if (orderId) {
            setTimeout(function () {
                resolve(orderId);
            }, 3000);
        }
    });
}

// validateCart → true

// After 3 seconds → resolve("12345")

// 2️⃣ First.then()
    .then(function (orderId) {
        console.log(orderId, "orderId");
        return orderId;
    })

// Output after 3 seconds:

// 12345 orderId

// Returns "12345"

// 3️⃣ .catch ()

// Important:

.catch(function (err) {
    console.log(err.message);
})

// Since no error happened:
// 👉 This.catch() is skipped.

// ⚠ BUT VERY IMPORTANT:
// .catch() also returns a promise.

// If error happened:

// It would log error

// And return undefined(because nothing returned)

// Then next.then() would receive undefined

// 4️⃣ Next.then()
    .then(function (orderId) {
        return proceedToPayment(orderId);
    })

// Receives "12345"

// Calls:

function proceedToPayment(orderId) {
    return new Promise(function (resolve) {
        resolve("Payment Successful");
    });
}

// Resolves immediately.

// 5️⃣ Final.then()
    .then(function (paymentInfo) {
        console.log(paymentInfo);
    });

Output:

// Payment Successful
// 📌 Final Output

// After 3 seconds:

// 12345 orderId
// Payment Successful
// 📌 Important Interview Concept: Error Propagation

// If this fails:

validateCart() => false

// Then:

reject("failed")

// First.then() skipped

// Goes to.catch()

// After.catch(), chain continues

// ⚠ Since.catch() doesn’t return anything → next.then() gets undefined

// That is a common interview trap.



// 📌 Converting to async / await(Cleaner)
async function placeOrder() {
    try {
        const orderId = await createOrder(cart);
        console.log(orderId);

        const paymentInfo = await proceedToPayment(orderId);
        console.log(paymentInfo);
    } catch (err) {
        console.log(err);
    }
}


// 📌 Internal Microtask Queue Behavior(Advanced)

// When promise resolves:
// 1) Callback is pushed into Microtask Queue
// 2) Microtasks run before macrotasks(like setTimeout)

// 📌 Execution order:

// Call stack empty
// Microtasks
// Macrotasks
// This is commonly asked in 4–5 YOE interviews.

// 📌 Promise Rules(FAANG - Level Important)
// 1️⃣ .then() always returns a new promise
// 2️⃣ If you return a value → next.then() receives it
// 3️⃣ If you return a promise → next waits for it
// 4️⃣ If you throw error → goes to nearest.catch()
// 5️⃣ .catch () also returns a promise
// 6️⃣ Promise can only resolve / reject once



createOrder(cart)
    .then(function (orderId) {
        console.log(orderId, "orderId");
        return orderId;
    })
    .catch(function (err) {
        console.log(err.message);
    })
    .then(function (orderId) {
        return proceedToPayment(orderId);
    })
    .then(function (paymentInfo) {
        console.log(paymentInfo);
    });

function createOrder(cart) {
    const pro = new Promise(function (resolve, reject) {
        if (!validateCart(cart)) {
            reject("failed");
        }

        const orderId = "12345";

        if (orderId) {
            setTimeout(function () {
                resolve(orderId);
            }, 3000);
        }
    });

    return pro;
}

function proceedToPayment(orderId) {
    return new Promise(function (resolve, reject) {
        resolve("Payment Successful");
    });
}

function validateCart() {
    return true;
}
