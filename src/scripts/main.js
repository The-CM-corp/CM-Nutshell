import chatFetchCalls from "./chatMethods";
import chatExecution from "./chatExecution";
import addClickEvents from "./navigation"


chatFetchCalls.loadExistingChats()

chatExecution.addNewMessageHandler()
chatExecution.deleteMessageHandler()

// for navigation stuff
addClickEvents()