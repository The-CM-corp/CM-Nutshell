import API from "./todo.js"
import putOnDOM from "./DOMPopulator"
import onTodoSumbit from "./todoForm"
import addClickEvents from "./navigation"

API.getTodo().then(todos => putOnDOM.initialTodos(todos))
let newTODO = {
  "task": "finish the group project",
  "date": "11/15/18",
  "completed": false,
  "user_id": 1
}
API.postTodo(newTODO).then(todos => console.log("brand new", todos)) 
// API.deleteTodo(2)

onTodoSumbit()


addClickEvents()
