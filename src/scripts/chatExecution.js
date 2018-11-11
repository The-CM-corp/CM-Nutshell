import chatStuff from "./chatMethods"


// const messageDeleteBtn = document.querySelector("#btn-delete-message");
// const messageEditBtn = document.querySelector("#btn-edit-message")


// click event to add new message


const runMessageHandler = () => {
  const newMessageBtn = document.querySelector("#btn-new-message");
  newMessageBtn.addEventListener("click", (event) => {
    console.log("button was clicke")
    let timestamp = new Date()
    const newMessageInput = document.querySelector("#input-new-message");
    let newMessage = chatStuff.chatObjFactory(timestamp, newMessageInput.value);
    chatStuff.saveNewChat(newMessage)
    .then(response => $("#chatResults").empty())
    .then(response => chatStuff.loadExistingChats())
  })
}

export default runMessageHandler

// messageDeleteBtn.addEventListener("click", (event) => {
//   // get the id of the delete btn and find the corresponding message with that id. pass that number into the api delete function.
//   chatStuff.deleteChat()
//   // clear out the container
//   // load the messages again
// })

