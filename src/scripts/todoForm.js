import putOnDOM from "./DOMPopulator"
import API from "./todo"
import deleteTask from "./todoDelete"


function onTodoSumbit () {
  let todoSubmit = document.getElementById("add__todo__button")
  todoSubmit.addEventListener("click", () => {
    console.log("wazzup")
    let newTodo = {
      "task": document.getElementById("add__todo__title").value,
      "date": document.getElementById("add__todo__date").value,
      "completed": false,
    }
    console.log(document.getElementById("add__todo__date"))
    API.postTodo(newTodo).then(data => putOnDOM.postNewTodo(data))
    console.log(newTodo)
    // onCheckbox()
    // deleteTask()
  })
}

export default onTodoSumbit 