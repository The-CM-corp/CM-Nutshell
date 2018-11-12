import addNavClickEvents from "./navigation"
import eventsGenerator from "./events"
import userFunctions from "./users"
import usersAPI from "./api-users"
import chatFetchCalls from "./chatMethods";
import chatExecution from "./chatExecution";
import {news} from "./news"


addNavClickEvents()
userFunctions()
eventsGenerator()
news()

$("#login__button").click(function(){usersAPI.loginUser()})

chatFetchCalls.loadExistingChats()
chatExecution.addNewMessageHandler()
chatExecution.deleteMessageHandler()
