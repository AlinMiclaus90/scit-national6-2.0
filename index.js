console.log("spaceship-homework-amiclaus");

let newSpaceship;
document
  .getElementById("generate-ship-button")
  .addEventListener("click", () => {
    console.log("Generate Car!");
    newSpaceship = new Spaceship();
  });

class Spaceship {
  constructor() {
    this.runningEngine = false;
    this.x = 0;
    this.y = 0;
    this.generateHTMLRef();
    // this.setStartEngine();
    this.setMoveSpaceship();
  }

  generateHTMLRef() {
    this.ref = document.createElement("img");
    let x = Math.floor(Math.random() * 3);
    console.log(x);
    this.ref.src = `spaceship${x}.svg`;
    this.ref.classList.add("spaceship");
    document.body.appendChild(this.ref);
  }

  // setStartEngine() {
  //   this.ref.addEventListener("click", () => {
  //     this.startEngine();
  //   });
  // }

  // startEngine() {
  //   if (!this.runningEngine) {
  //     this.runningEngine = true;
  //     console.log("Engine is start!");
  //     this.ref.classList.add("engine--start");
  //   }
  // }

  setMoveSpaceship() {
    document.addEventListener("keydown", (event) => {
      console.log(event);
      // if (this.runningEngine) {
      newSpaceship.moveSpaceship(event.key);
      // }
    });
  }

  moveSpaceship(direction) {
    if (direction === "ArrowRight") {
      this.x += 5;
      this.ref.style.transform = `translate(${this.x}px, ${this.y}px)`;
    } else if (direction === "ArrowLeft") {
      this.x -= 5;
      this.ref.style.transform = `translate(${this.x}px, ${this.y}px)`;
    } else if (direction === "ArrowDown") {
      this.y += 5;
      this.ref.style.transform = `translate(${this.x}px, ${this.y}px)`;
    } else if (direction === "ArrowUp") {
      this.y -= 5;
      this.ref.style.transform = `translate(${this.x}px, ${this.y}px)`;
    }
  }
}
