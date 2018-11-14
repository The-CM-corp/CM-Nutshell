import chatFetchCalls from "./chatMethods"

export default {
  addNewMessageHandler: function () {
    $("#add__chat__button").click(() => {
      let timestamp = new Date();
      const newMessageInput = document.querySelector("#add__chat__message");
      let newMessage = chatFetchCalls.chatObjFactory(timestamp, newMessageInput.value);
      return chatFetchCalls.saveNewChat(newMessage)
        .then(() => {
          $("#chat__results").empty()
          newMessageInput.value = "";
          chatFetchCalls.loadExistingChats()
        })
    })
  },
  deleteMessageHandler: function () {
    $("#chat__results").on("click", ".btn__chat__delete", (event) => {
      let chatId = event.target.id.split("-")[1]
      return chatFetchCalls.deleteChat(chatId)
        .then(() => $("#chat__results").empty())
        .then(() => chatFetchCalls.loadExistingChats())
    })
  },
  editFormHandler: function () {
    $("#chat__results").on("click", ".btn__chat__edit", (event) => {
      console.log("button was clicked")
      let chatId = event.target.id.split("-")[1]
      let inputToShow = $(`#input__chat__edit-${chatId}`)
      let saveBtnToShow = $(`#btn__chat__input_save-${chatId}`)
      let editBtnToHide = $(`#btn__chat__edit-${chatId}`)
      let deleteBtnToHide = $(`#btn__chat__delete-${chatId}`)
      inputToShow.removeClass("hide")
      saveBtnToShow.removeClass("hide")
      editBtnToHide.addClass("hide")
      deleteBtnToHide.addClass("hide")
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









