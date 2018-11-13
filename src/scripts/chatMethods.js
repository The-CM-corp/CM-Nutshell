import putOnDOM from "./DOMPopulator";

// TODO obtain user name from USER ID

export default {
  // takes user input and makes new object
  chatObjFactory: function (time, inputValue) {
    return {
      user_id: sessionStorage.user_id,
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
      .then(returnedObject => returnedObject)
      .then(returnedObject => returnedObject.json())
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
    return fetch(`http://localhost:8088/chats?_sort=time&_order=desc&_limit=10`) //posts?_sort=views&_order=asc
      .then(entries => entries.json())
      .then(entries => entries.reverse())
      .then(entries => {
        entries.forEach(entry => {
          putOnDOM.postNewMessage(entry)
        })
    })
  },
  getUserName: function (entryId) {
    return fetch(`http://localhost:8088/users/${entryId}`)
      .then(jsonObj => jsonObj.json())
      .then(jsObject => jsObject.name)
  }
}