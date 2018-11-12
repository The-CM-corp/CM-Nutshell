import chatFetchCalls from "./chatMethods"

export default {
  addNewMessageHandler: function () {
    $("#add__chat__button").click(() => {
      let timestamp = new Date()
      const newMessageInput = document.querySelector("#add__chat__message");
      let newMessage = chatFetchCalls.chatObjFactory(timestamp, newMessageInput.value);
      return chatFetchCalls.saveNewChat(newMessage)
        .then(response => $("#chat__results").empty())
        .then(response => chatFetchCalls.loadExistingChats())
        .then(response => newMessageInput.value = "")
    })
  },
  deleteMessageHandler: function () {
    $("#chat__results").on("click", ".btn__chat__delete", (event) => {
      let chatId = event.target.id.split("-")[1]
      return chatFetchCalls.deleteChat(chatId)
        .then(response => {
          let messageHolder = event.target.parentElement
          let chatOutput = document.querySelector("#chat__results")
          chatOutput.removeChild(messageHolder)
        })
    })
  }
}



// TODO find a way to only display 10 most recent messages in reverse order, some kind of feedback when message is saved, deleted, edited. Using user input to edit the message. Format the timestamp better.





