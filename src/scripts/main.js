import API from "./todo.js"
import putOnDOM from "./DOMPopulator"
import onTodoSumbit from "./todoForm"
import addNavClickEvents from "./navigation"
import eventsGenerator from "./events"
import userFunctions from "./users"
import usersAPI from "./api-users"
import chatFetchCalls from "./chatMethods";
import chatExecution from "./chatExecution";
import { news } from "./news"
import todoClicks from "./todoClicks";
import clearTODODom from "./todoClearDOM"

addNavClickEvents()
userFunctions()
// news()

$("#login__button").click(function () {
  usersAPI.loginUser().then(() => {
    eventsGenerator()
    news()
    chatFetchCalls.loadExistingChats()
    let fetchUserName = sessionStorage.getItem("user_name")
    $("#nav__username").text(fetchUserName)
    clearTODODom()
  })
})

chatExecution.addNewMessageHandler()
chatExecution.deleteMessageHandler()
chatExecution.editMessageHandler()


//todo calls

onTodoSumbit()
todoClicks()





