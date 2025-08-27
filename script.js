// Part 1: Variables and Conditionals
let name = "Faith";
let age = 18;

console.log("Hello, " + name);

if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}
// Part 2: Functions

// Function 1: greet someone
function greet(person) {
    return "Hello, " + person + "!";
}
console.log(greet("Imani"));

// Function 2: calculate square of a number
function square(num) {
    return num * num;
}
console.log(square(5));
// Part 3: Loops

// Example 1: for loop
for (let i = 1; i <= 5; i++) {
    console.log("Counting: " + i);
}

// Example 2: while loop
let j = 1;
while (j <= 3) {
    console.log("While loop: " + j);
    j++;
}
// Part 4: DOM Interactions

// Change text on button click
document.getElementById("changeTextBtn").addEventListener("click", function() {
    document.getElementById("demo").innerText = "Text has been changed!";
});

// Add list item dynamically
document.getElementById("addItemBtn").addEventListener("click", function() {
    let li = document.createElement("li");
    li.innerText = "New Item";
    document.getElementById("list").appendChild(li);
});

// Toggle class example
let demoText = document.getElementById("demo");
demoText.addEventListener("click", function() {
    demoText.classList.toggle("highlight");
});