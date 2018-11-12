import addNavClickEvents from "./navigation"
import eventsGenerator from "./events"
import userFunctions from "./users"
import chatFetchCalls from "./chatMethods";
import chatExecution from "./chatExecution";
import addClickEvents from "./navigation"
import {news} from "./news"


addNavClickEvents()
userFunctions()
eventsGenerator()
news()

chatFetchCalls.loadExistingChats()
chatExecution.addNewMessageHandler()
chatExecution.deleteMessageHandler()

// for navigation stuff
addClickEvents()