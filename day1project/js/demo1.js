document.write(30+20)
console.log(30+20)

// Print numbers from 1 to 5
for(let i=1;i<=5;i++) {
    console.log(i)
}

//console.log("Value of i after for is: " + i);

const c = 500

console.log(c)

let x = function() {
    return "Hyderabad"
}

console.log(x())

// Arrow Function
let m = () => "Colruyt"
console.log(m())

// Arrow function with argument
let m2 = msg => "Hi " + msg;
console.log(m2("Prateep"))

// Arrow function with Multi Line statements
let m3 = () => {
    console.log("First line")
    console.log("Second Line")
    return "Last line"
}
console.log(m3());

// Values in Java Script
let p = 10;
console.log(p);

p = true;
console.log(p);

p = "ABC"
console.log(p);

p = function() {
    return "P sadasdff"
}
console.log(p);

p = ["ABC", 10, true, function() { return "P sadasdff"}, [4,2]]
console.log(p)

// Representing an object
p = {"ename" : "Prateep"}
console.log(p);

//Define a function
function add(a, b) {
    return a + b
}

p = add(3, 5);
console.log(p);

p = add();
console.log(p);

p = add("4" , 5)
console.log(p);