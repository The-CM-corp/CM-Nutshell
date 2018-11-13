import API from "./todo"
import putOnDOM from "./DOMPopulator"

function clearTODODom() {

  document.getElementById("todo__results").innerHTML = ""
  let fetchUserId = sessionStorage.getItem("user_id")
  API.getTodo(fetchUserId)
    .then(todo => {
      putOnDOM.initialTodos(todo)
    })
  //a .then that filters completed true false and puts it in the correct div
}

export default clearTODODom

