import chatFetchCalls from "./chatMethods"

export default {
  addNewMessageHandler: function () {
    $("#add__chat__button").click(() => {
      let timestamp = new Date();
      const newMessageInput = document.querySelector("#add__chat__message");
      let newMessage = chatFetchCalls.chatObjFactory(timestamp, newMessageInput.value);
      return chatFetchCalls.saveNewChat(newMessage)
        .then(response => {
          $("#chat_results").empty()
          newMessageInput.value = "";
          chatFetchCalls.loadExistingChats()
        })
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
    $("#chat__results").on("click", ".btn__chat__input_save", (event) => {
      let chatId = event.target.id.split("-")[1]
      let newMessage = $(`#input__chat__edit-${chatId}`).val()
      const messageContent = {
        message: newMessage
      }
      return chatFetchCalls.editChat(chatId, messageContent)
        .then(response => {
          $("#chat__results").empty()
          chatFetchCalls.loadExistingChats()
        })
    })
  }
}









