import API from "./todo.js"
import putOnDOM from "./DOMPopulator"
import onTodoSumbit from "./todoForm"
import chatFetchCalls from "./chatMethods";
import chatExecution from "./chatExecution";
import addClickEvents from "./navigation"
import {news} from "./news"




news()

chatFetchCalls.loadExistingChats()

chatExecution.addNewMessageHandler()
chatExecution.deleteMessageHandler()

// for navigation stuff
addClickEvents()

API.getTodo().then(todos => putOnDOM.initialTodos(todos))
let newTODO = {
  "task": "finish the group project",
  "date": "11/15/18",
  "completed": false,
  "user_id": 1
}
// API.postTodo(newTODO).then(todos => console.log("brand new", todos)) 
// API.deleteTodo(2)

onTodoSumbit()



addClickEvents()
