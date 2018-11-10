// interacting with the input form for new todos
import putOnDOM from "./DOMPopulator"
import API from "./todo"


function onTodoSumbit () {
  let todoSubmit = document.getElementById("todo__sumbitInput")
  todoSubmit.addEventListener("click", () => {
    console.log("wazzup")
    let newTodo = {
      "task": document.getElementById("todo__taskInput").value,
      "date": document.getElementById("todo__dateInput").value,
      "completed": false,
    }
    API.postTodo(newTodo).then(data => putOnDOM.postNewTodo(data))
    console.log(newTodo)
  })
}

export default onTodoSumbit 