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

