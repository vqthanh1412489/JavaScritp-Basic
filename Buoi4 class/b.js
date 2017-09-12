class Point {
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
}

const pA = new Point(0, 0);
const pB = new Point(1, 1);

class Line {
    constructor(pointA, pointB){
        this.pointA = pointA;
        this.pointB = pointB;
    }

    getlength(){
        const dx = this.pointA.x - this.pointB.x;
        const dy = this.pointA.y - this.pointB.y;
        return Math.sqrt(dx*dx + dy*dy);
    }
}

const lineAB = new Line(pA, pB);
console.log('Distance AB is: ' + lineAB.getlength());

class Triangle {
    constructor(pointA, pointB, pointC){
        this.pointA = pointA;
        this.pointB = pointB;
        this.pointC = pointC;
    }

    getChuVi(){
        const lineAB = new Line(this.pointA, this.pointB);
        const lineAC = new Line(this.pointA, this.pointC);
        const lineBC = new Line(this.pointB, this.pointC);

        return lineAB.getlength() + lineAC.getlength() + lineBC.getlength();
    }
}

const pC = new Point (0, 1);

const triangleABC = new Triangle(pA, pB, pC);

console.log('Chu vi cua tam giac la: ' + triangleABC.getChuVi());