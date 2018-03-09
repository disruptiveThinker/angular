"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const module1_1 = require("./module1");
const module2_1 = require("./module2");
// Define a class with Data Members and Initialize members
class MyClass {
    // constructor () {
    //     this.empName = "Prateep";
    // };
    constructor(nm) {
        this.empName = nm;
    }
    ;
}
// TypeScript Simplified version of Class Definition
class MyStudent {
    constructor(sname) {
        this.sname = sname;
    }
    ;
}
let emp1 = new MyClass("Employee 111");
console.log(emp1.empName);
let s1 = new MyStudent("Student 111");
console.log(s1.sname);
let p1 = new module1_1.Point(10, 5);
let p2 = new module1_1.Point(100, 200);
let p3 = p1.addPoint(p2);
console.log(p3);
// Using Point3D
let pt1 = new module1_1.Point3D(1, 2, 3);
let pt2 = new module1_1.Point3D(10, 11, 12);
let pt3 = pt1.addPoint(pt2);
console.log(pt3);
// Interface Usage
let players;
players = new module2_1.MyCricketTeam();
console.log("Cricket players: " + players.getTotalPlayers());
players = new module2_1.MyFootballTeam();
console.log("Football players: " + players.getTotalPlayers());
