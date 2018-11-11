import chatStuff from "./chatMethods"




// click event to add new message
const addNewMessageHandler = () => {
  const newMessageBtn = document.querySelector("#btn-new-message");
  newMessageBtn.addEventListener("click", (event) => {
    console.log("button was clicke")
    let timestamp = new Date()
    const newMessageInput = document.querySelector("#input-new-message");
    let newMessage = chatStuff.chatObjFactory(timestamp, newMessageInput.value);
    chatStuff.saveNewChat(newMessage)
    .then(response => $("#chatResults").empty())
    .then(response => chatStuff.loadExistingChats())
    .then(entries => putOnDOM.initialChats(entries))
  })
}




// need click event on delete button button that will delete an entry from the DB and either delete from the DOM immediately or reload the entries. will need to have a unique identifier that can associate each delete button and edit button with the corresponding message. (maybe add a button element maker call in the DOM populator)

// need to make forms that will be added dynamically when the "add new message" button is clicked.

// need to find a way to only display 10 most recent messages in reverse order.

// some kind of feedback when the user's message goes through


export default addNewMessageHandler


