import API from "./todo.js"
import putOnDOM from "./DOMPopulator"


let newTODO = {
  "task": "finish the group project",
  "date": "11/15/18",
  "completed": false,
  "user_id": 1
}
// API.postTodo(newTODO).then(todos => console.log("new todos", todos))
// API.deleteTodo(2)
API.getTodo().then(todos => putOnDOM.initialTodos(todos))


// I want the task to be a slightly larger fornt than the expected completed date
// i want task on top of date and check box to the right of the text