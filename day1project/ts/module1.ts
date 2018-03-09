
export class Point {
    public x:number;
    public y:number;

    constructor(a:number, b:number) {
        this.x = a;
        this.y = b;
    }

    addPoint(pt:Point): Point {
        return new Point(this.x + pt.x, this.y + pt.y);
    }
}

// Inheritance with extends
export class Point3D extends Point {
    constructor(x:number, y:number, public z:number) {
        super(x,y);
    }
    addPoint(pt3d:Point3D): Point3D {
        let pt2d = super.addPoint(pt3d)
        return new Point3D(pt2d.x, pt2d.y, this.z+pt3d.z)
    }    
}
