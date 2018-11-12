import putOnDOM from "./DOMPopulator";

// TODO obtain user name from USER ID

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
    .then(entries => putOnDOM.initialChats(entries))
  }
}