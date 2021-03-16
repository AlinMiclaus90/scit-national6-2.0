console.log("OOP");

const car1 = {
  nrOfWheels: 4,
  color: "red",
  engine: "diesel",
  runningEngine: false,
  turn: function (direction) {
    if (this.runningEngine) {
      console.log("the car is running", direction);
    } else {
      console.log("The car is not running, turn the engine on");
    }
    console.log("The car is turning", direction);
  },
  startEngine: function () {
    console.log(this);
    console.log("The engine is starting");
    this.runningEngine = true;
  },
};

// car.startEngine();
car1.turn("left");
car1.startEngine();
car1.turn("left");

const car2 = {
  nrOfWheels: 4,
  color: "white",
  engine: "electric",
  runningEngine: false,
  turn: function (direction) {
    if (this.runningEngine) {
      console.log("the car is running", direction);
    } else {
      console.log("The car is not running, turn the engine on");
    }
    console.log("The car is turning", direction);
  },
  startEngine: function () {
    console.log(this);
    console.log("The engine is starting");
    this.runningEngine = true;
  },
};

// car.startEngine();
car2.turn("left");
car2.startEngine();
car2.turn("left");

// Classes
class CarAuto {
  constructor(color, engine) {
    this.__nrOfWheels = 4;
    this.color = color;
    this.engine = engine;
    this.runningEngine = false;
  }

  turn(direction) {
    if (this.runningEngine) {
      console.log("the car is running", direction);
    } else {
      console.log("The car is not running, turn the engine on");
    }
    console.log("The car is turning", direction);
  }

  startEngine() {
    console.log(this);
    console.log("The engine is starting");
    this.runningEngine = true;
  }
}

class Bike {

}

const car3 = new Car("yellow, hybrid");
const car4 = new Car("pink","petrol");
console.log(car3);
console.log(car3.color);
car3.startEngine();
console.log(car3);
car3.color = "green";
console.log(car3);

console.log(car4);
car4.nrOfDors = 2;
console.log(car4);
console.log(car3);

console.log(Car.color);

let vehicle;
const typeOFVehicle = "car";
if (typeOFVehicle === "car") {
    vehicle = new Car();
} else {
    vehicle = new Bike();
}

// class Bike{}

document.getElementById("generate-car").addEventListener("click", () => {
  console.log("generate cat");
  const newCar = new CarAuto();
})