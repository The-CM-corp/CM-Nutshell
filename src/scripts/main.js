import API from "./todo.js"
import putOnDOM from "./DOMPopulator"
import onTodoSumbit from "./todoForm"
import addNavClickEvents from "./navigation"
import eventsGenerator from "./events"
import userFunctions from "./users"
import usersAPI from "./api-users"
import chatFetchCalls from "./chatMethods";
import chatExecution from "./chatExecution";
import {news} from "./news"


addNavClickEvents()
userFunctions()
// news()

$("#login__button").click(function(){usersAPI.loginUser().then(() => {
  eventsGenerator()
  news()
  let fetchUserName = sessionStorage.getItem("user_name")
  $("#nav__username").text(fetchUserName)
})})

chatFetchCalls.loadExistingChats()
chatExecution.addNewMessageHandler()
chatExecution.deleteMessageHandler()


//todo calls
API.getTodo().then(todos => putOnDOM.initialTodos(todos))
onTodoSumbit()
