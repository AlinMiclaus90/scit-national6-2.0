console.log("JavaScript OOP Game");

// object literal
// this comes from Object Class
const obj = {};

const a = new Object() ;
console.log(a);

// this comes from Array class
const b = [];

class Car {
    constructor(color) {
        this.color = color;
    }
    startCar() {
        console.log("Start Car");
    }
}

class CarWithElectricWindows extends Car{
        openElectricWindow(windowNr) {
            console.log("Opening window", windowNr);
        }
}

const car1 = new Car("white");
console.log(car1);

const car2 = new CarWithElectricWindows("black");
console.log(car2);
car2.startCar();
car2.openElectricWindow(4);

class MyArray extends Array {
    printLengthWithJoy() {
        console.log(this.length + " with joy");
    }
}

const myArray1 = new MyArray();
myArray1.push("abc", "d");
console.log(myArray1);
myArray1.printLengthWithJoy();