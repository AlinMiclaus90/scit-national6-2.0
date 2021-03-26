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
.then(getData);
});

function getData() {
  document
  .getElementById("add-task-button")
  .addEventListener("click", () => {
    fetch('https://simple-json-server-scit.herokuapp.com/todo')
    .then(handleFetchResponse)
    .then(useJSONResponse);
  })
};

function handleFetchResponse(response) {
  console.log("response is:", response);
  return response.JSON();
}

function useJSONResponse(json) {
  console.log("JSON is:", json);
  renderTasks(json);
}

function renderTasks(tasks) {
  const taskList = document.getElementsByClassName("task-list");

  const taskItem = document.createElement("div");


  taskList.appendChild(taskItem);

  taskItem.innerText = taskItem;



}