import putOnDOM from "./DOMPopulator"
import API from "./todo"
import deleteTask from "./todoClicks"


function onTodoSumbit () {
  let todoSubmit = document.getElementById("add__todo__button")
  let sessionUserID = sessionStorage.getItem("user_id")
  todoSubmit.addEventListener("click", () => {
    let newTodo = {
      "task": document.getElementById("add__todo__title").value,
      "date": document.getElementById("add__todo__date").value,
      "completed": false,
      "user_id": +sessionUserID
    }
    API.postTodo(newTodo).then(data => putOnDOM.postNewTodo(data))  
    // onCheckbox()
    // deleteTask()
  })
}

export default onTodoSumbit 