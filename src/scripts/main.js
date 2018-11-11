import chatStuff from "./chat"


let timestamp = new Date()
const newMessageBtn = document.querySelector("#btn-new-message");
const newMessageInput = document.querySelector("#input-new-message");


// click event to add new message
newMessageBtn.addEventListener("click", (event) => {
  let newMessage = chatStuff.chatObjFactory(timestamp, newMessageInput)
  console.log(newMessage)
})

// click event to delete message. must have a matching id between delete button and message
