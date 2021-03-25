console.log("My beautiful Homework");

document
.getElementById("add-task-button")
.addEventListener("click", () => {
    console.log("It's working!");
    const userInput = document.getElementById("input").value;    
    console.log("User Input is:", userInput);

    // if (userInput) {
        const payload = {
            id: "amiclaus",
            todo:[
              {
                checked: false,
                item: userInput
              },
           ]
        }
    // }

    console.log("Payload object:", payload)
    console.log("Payload string:", JSON.stringify(payload));

    fetch('https://simple-json-server-scit.herokuapp.com/todo', {
  method: "POST",
  headers: {
      'Content-Type': 'application/json'
  },
  body: JSON.stringify(payload)
})
});