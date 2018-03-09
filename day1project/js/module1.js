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
