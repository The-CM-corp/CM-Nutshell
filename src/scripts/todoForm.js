import putOnDOM from "./DOMPopulator"
import API from "./todo"

function onTodoSumbit() {
  let todoSubmit = document.getElementById("add__todo__button")
  todoSubmit.addEventListener("click", () => {
    let sessionUserID = sessionStorage.getItem("user_id")
    let newTodo = {
      "task": document.getElementById("add__todo__title").value,
      "date": document.getElementById("add__todo__date").value,
      "completed": false,
      "user_id": +sessionUserID
    }
    if (!newTodo.task || !newTodo.date) {
      alert("Please fill the form!!")
    } else {
    API.postTodo(newTodo).then(data => putOnDOM.postNewTodo(data))
    }
  })
}

export default onTodoSumbit 