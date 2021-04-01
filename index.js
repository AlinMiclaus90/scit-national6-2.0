console.log("spaceship-homework-amiclaus");


document
  .getElementById("generate-ship-button")
  .addEventListener("click", () => {
    console.log("Generate Car!");
    const newSpaceship = new Spaceship();
  });



class Spaceship {
  constructor() {
      this.runningEngine = false;
    this.position - 0;
    this.generateHTMLRef();
    this.setStartEngine();
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

  setStartEngine() {
      this.ref.addEventListener("click", () => {
          this.startEngine();
      })
  }

  startEngine() {
      if (!this.runningEngine) {
          this.runningEngine = true;
          console.log("Engine is start!");
          this.ref.classList.add("engine--start");
      }
  }

  setMoveSpaceship() {
      document.addEventListener("keydown", (event) => {
        console.log(event);
        if (this.runningEngine) {
            this.moveSpaceship(event.key);
        }
      })
  }

  moveSpaceship(direction) {
    if (direction === "ArrowRight") {
        this.position += 10;
        this.ref.style.marginLeft = `${this.position}px`
    } else if (direction === "ArrowLeft") {
        this.position -= 10;
        this.ref.style.marginLeft = `${this.position}px`
    } else if (direction === "ArrowDown") {
        this.position += 10;
        this.ref.style.marginTop = `${this.position}px`
    } else if (direction === "ArrowUp") {
        this.position -= 10;
        this.ref.style.marginTop = `${this.position}px`
    };
  }



}
