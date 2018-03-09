/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const module1_1 = __webpack_require__(1);
const module2_1 = __webpack_require__(2);
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


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Point {
    constructor(a, b) {
        this.x = a;
        this.y = b;
    }
    addPoint(pt) {
        return new Point(this.x + pt.x, this.y + pt.y);
    }
}
exports.Point = Point;
// Inheritance with extends
class Point3D extends Point {
    constructor(x, y, z) {
        super(x, y);
        this.z = z;
    }
    addPoint(pt3d) {
        let pt2d = super.addPoint(pt3d);
        return new Point3D(pt2d.x, pt2d.y, this.z + pt3d.z);
    }
}
exports.Point3D = Point3D;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class MyCricketTeam {
    getTotalPlayers() {
        return 11;
    }
}
exports.MyCricketTeam = MyCricketTeam;
class MyFootballTeam {
    getTotalPlayers() {
        return 9;
    }
}
exports.MyFootballTeam = MyFootballTeam;


/***/ })
/******/ ]);