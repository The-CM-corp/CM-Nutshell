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
// import checkInputs from "./formValidation"

addNavClickEvents()
userFunctions()
// news()

$("#login__button").click(function () {
  usersAPI.loginUser().then(() => {
    eventsGenerator()
    news()
    chatFetchCalls.loadExistingChats()
    // let fetchUserName = sessionStorage.getItem("user_name")
    let fetchUserId = sessionStorage.getItem("user_id")
    // let fetchUserName = chatFetchCalls.getUserName(fetchUserId)
    usersAPI.getUserName(fetchUserId)
    // .then(returns => console.log(`current user name ${returns}`))
    .then(fetchUserName => {
      $("#nav__username").text(fetchUserName)
    } )

    clearTODODom()
  })
}
)

chatExecution.editFormHandler()
chatExecution.addNewMessageHandler()
chatExecution.deleteMessageHandler()
chatExecution.editMessageHandler()



//todo calls

onTodoSumbit()
todoClicks()





