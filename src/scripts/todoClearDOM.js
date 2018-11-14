import API from "./todo"
import putOnDOM from "./DOMPopulator"

function clearTODODom() {
  document.getElementById("todo__results").innerHTML = ""
  document.getElementById("todo__complete").innerHTML = ""
  let fetchUserId = sessionStorage.getItem("user_id")
  API.getTodo(fetchUserId)
    .then(todo => {
      putOnDOM.initialTodos(todo)
    })
}

export default clearTODODom

