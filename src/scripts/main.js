import chatStuff from "./chatMethods";
import chatExecution from "./chatExecution";
import addClickEvents from "./navigation"


chatStuff.loadExistingChats()

chatExecution.addNewMessageHandler()
chatExecution.deleteMessageHandler()

// for navigation stuff
addClickEvents()