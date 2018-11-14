import putOnDOM from "./DOMPopulator";

// TODO obtain user name from USER ID

export default {
  // takes user input and makes new object
  chatObjFactory: function (time, inputValue) {
    return {
      userId: parseInt(sessionStorage.user_id, 10),
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
  // loadExistingChats: function () {
  //   return fetch(`http://localhost:8088/chats?_expand=user`)
  //     .then(entries => entries.json())
  //     .then(entries => console.log(entries))
  //     .catch(error => console.log(error))
  //     // .then(entries => {
  //     //   entries.forEach(entry => {
  //     //     putOnDOM.postNewMessage(entry)
  //     //   })
  // }
  loadExistingChats: function () {
    return fetch(`http://localhost:8088/chats?_sort=time&_order=desc&_limit=10&_expand=user`)
      .then(entries => entries.json())
      .then(entries => entries.reverse())
      .then(entries => {
        entries.forEach(entry => {
          putOnDOM.postNewMessage(entry)
        })
    })
  }
}