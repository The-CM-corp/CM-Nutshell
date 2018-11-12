import API from "./todo.js"
import putOnDOM from "./DOMPopulator"
import onTodoSumbit from "./todoForm"
import addNavClickEvents from "./navigation"
import eventsGenerator from "./events"
import userFunctions from "./users"
import chatFetchCalls from "./chatMethods";
import chatExecution from "./chatExecution";
import {news} from "./news"


addNavClickEvents()
userFunctions()
eventsGenerator()
news()

chatFetchCalls.loadExistingChats()
chatExecution.addNewMessageHandler()
chatExecution.deleteMessageHandler()



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





