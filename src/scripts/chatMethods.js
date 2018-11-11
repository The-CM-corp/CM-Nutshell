import putOnDOM from "./DOMPopulator";

// communicate with the API to GET the messages array of Objects, then be able to obtain the value name on the user id. Be able to edit (PATCH) one entry, POST a new entry, and DELTE an entry. Start by getting these to function without dealing with the DOM yet.

export default {
  // takes user input and makes new object
  chatObjFactory: function(time, inputValue) {
    return {
    user_id: 1,
    time: time,
    message: inputValue
    }
  },
  saveNewChat: function (object) {
    return fetch(`http://localhost:8088/chats/`, {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(object)
    })
  },
  editChat: function (objId, newContent) {
    return fetch(`http://localhost:8088/chats/${objId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newContent)
    })
  },
  deleteChat: function (objectId) {
    return fetch(`http://localhost:8088/chats/${objectId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
  },
  loadExistingChats: function () {
    return fetch(`http://localhost:8088/chats/`)
    .then(entries => entries.json())
    .then(entries => putOnDOM.initialChat(entries))
  }
}