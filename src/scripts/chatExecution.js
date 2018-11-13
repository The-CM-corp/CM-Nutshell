import chatFetchCalls from "./chatMethods"

export default {
  addNewMessageHandler: function () {
    $("#add__chat__button").click(() => {
      let timestamp = new Date()
      const newMessageInput = document.querySelector("#add__chat__message");
      let newMessage = chatFetchCalls.chatObjFactory(timestamp, newMessageInput.value);
      return chatFetchCalls.saveNewChat(newMessage)
        .then(jsObject => chatFetchCalls.getUserName(jsObject.user_id))
        .then(name => console.log(name))
        // i've got the name here in the console
        .then(userName => chatFetchCalls.loadExistingChats())
        .then(response => newMessageInput.value = "")
    })
  },
  deleteMessageHandler: function () {
    $("#chat__results").on("click", ".btn__chat__delete", (event) => {
      let chatId = event.target.id.split("-")[1]
      return chatFetchCalls.deleteChat(chatId)
        .then(response => $("#chat__results").empty())
        .then(response => chatFetchCalls.loadExistingChats())
    })
  },
  editMessageHandler: function () {
    $("#chat__results").on("click", ".btn__chat__edit", (event) => {
      let chatId = event.target.id.split("-")[1]
      const newMessageInput = document.querySelector("#add__chat__message");
      let chatEditInput = document.createElement("input")

      const messageContent = {
        message: newMessageInput.value
    }
      return chatFetchCalls.editChat(chatId, messageContent)
        .then(response => $("#chat__results").empty())
        .then(response => chatFetchCalls.loadExistingChats())
    })
  }
}









