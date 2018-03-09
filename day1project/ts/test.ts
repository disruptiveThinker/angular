// Declare a varaible with DataType

let v1:string = "MNC";
console.log(v1);
console.log("Last line");

// Primitive data type in TypeScript
// number, string , boolean
// Special Types: any, void
// Array: [] OR Array
// Function
// {}

let v2:number = 22/7;
console.log(v2);

let v3:string[] = ["JavaScript", "Angular", "Java"];
console.log(v3)

v3.forEach(element => {
    console.log(element);
});

for(let e of v3) {
    console.log(e);
}

//Type Inferring
let s = "Prateep";
console.log(s)
//s = 500;

let v4:Function;
v4 = () => "This is a function type variable";
console.log(v4);

let emp:{    
    ename:string, 
    empid:number
};
emp = {ename:"Pratep", empid:111}
console.log(emp.ename, emp.empid);

// Function is TypeScript
function sum(a:number, b:number):number {
    return a+b;
}
//emp = sum(4,5);
//let n = sum();
//let n = sum("", 5);
let n = sum(3,5);
console.log(n);

//Excersise
function temp(m:Function):void {
    console.log(m());
}

temp(function() {
    return "Colruyt IT"
});

temp (() => "XYZ");

function dummy() {
    return "Dummy Fuction";
}

temp(dummy);
