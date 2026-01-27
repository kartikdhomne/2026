// Call :

// 🟢 call() invokes a function immediately while explicitly setting the this
// value and passing arguments one by one.

// example 1

function greet(city, country) {
    console.log(`Hi, I am ${this.name} from ${city}, ${country}`);
}

const user = {
    name: "Kartik",
};

greet.call(user, "Pune", "India"); // Hi, I am Kartik from Pune, India

// 👉:
// this inside greet points to user
// Arguments are passed one by one

// example 2 (Function borrowing)
const person1 = {
    name: "Aman"
};

const person2 = {
    name: "Rohit"
};

function sayHello() {
    console.log("Hello " + this.name);
}

sayHello.call(person1); // Hello Aman
sayHello.call(person2); // Hello Rohit
