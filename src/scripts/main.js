import API from "./todo.js"
import putOnDOM from "./DOMPopulator"
import onTodoSumbit from "./todoForm"
import addNavClickEvents from "./navigation"
import eventsGenerator from "./events"
import userFunctions from "./users"
import chatFetchCalls from "./chatMethods";
import chatExecution from "./chatExecution";
import {news} from "./news"
import deleteTask from "./todoDelete"
import todoClicks from "./todoDelete";


addNavClickEvents()
userFunctions()
eventsGenerator()
news()

chatFetchCalls.loadExistingChats()
chatExecution.addNewMessageHandler()
chatExecution.deleteMessageHandler()


//todo calls 
API.getTodo().then(todos => putOnDOM.initialTodos(todos))
onTodoSumbit()
todoClicks()




