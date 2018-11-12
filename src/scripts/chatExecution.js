import chatStuff from "./chatMethods"

export default {
  addNewMessageHandler: function () {
    $("#btn-new-message").click(() => {
      let timestamp = new Date()
      const newMessageInput = document.querySelector("#input-new-message");
      let newMessage = chatStuff.chatObjFactory(timestamp, newMessageInput.value);
      return chatStuff.saveNewChat(newMessage)
        .then(response => $("#chat__results").empty())
        .then(response => chatStuff.loadExistingChats())
        .then(response => newMessageInput.value = "")
    })
  },
  deleteMessageHandler: function () {
    $("#chat__results").on("click", ".btn__chat__delete", (event) => {
      let chatId = event.target.id.split("-")[1]
      return chatStuff.deleteChat(chatId)
        .then(response => {
          let messageHolder = event.target.parentElement
          let chatOutput = document.querySelector("#chat__results")
          chatOutput.removeChild(messageHolder)
        })
    })
  }
}




// need to make forms that will be added dynamically when the "add new message" button is clicked.

// need to find a way to only display 10 most recent messages in reverse order.

// some kind of feedback when the user's message goes through




