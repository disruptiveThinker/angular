import {Point, Point3D} from "./module1";
import {IPlayers, MyCricketTeam, MyFootballTeam} from "./module2";

// Define a class with Data Members and Initialize members
class MyClass {
    empName:string;

    // constructor () {
    //     this.empName = "Prateep";
    // };

    constructor(nm:string) {
        this.empName = nm;
    };
}

// TypeScript Simplified version of Class Definition
class MyStudent {
    constructor(public sname:string) {};
}

let emp1:MyClass = new MyClass("Employee 111");
console.log(emp1.empName);

let s1:MyStudent = new MyStudent("Student 111");
console.log(s1.sname);

let p1:Point = new Point(10,5);
let p2:Point = new Point(100,200);
let p3:Point = p1.addPoint(p2);
console.log(p3)

// Using Point3D
let pt1:Point3D = new Point3D(1,2,3);
let pt2:Point3D = new Point3D(10,11,12);
let pt3:Point3D = pt1.addPoint(pt2);
console.log(pt3);


// Interface Usage
let players:IPlayers;
players = new MyCricketTeam();
console.log("Cricket players: " + players.getTotalPlayers());
players = new MyFootballTeam();
console.log("Football players: " + players.getTotalPlayers());
