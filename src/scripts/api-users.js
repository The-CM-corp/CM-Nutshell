const usersAPI = {
  getUsers() {
    return fetch("http://localhost:8088/users")
      .then(response => response.json())
  },
  saveUser(entry) {
    return fetch("http://localhost:8088/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(entry)
    }).then(response => response.json())
  },
  deleteUser(id) {
    return fetch(`http://localhost:8088/users/${id}`, {
      method: "DELETE"
    }).then(response => response.json())
  },
  loginUser() {
    sessionStorage.clear()
    let user = $("#login__name").val()
    console.log(user)
    // fetch db
    return fetch(`http://localhost:8088/users?name=${user}`)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        sessionStorage.setItem("user_id", data[0].id)
        // sessionStorage.setItem("user_name", data[0].name)
      }
      )
    // if no match found, throw alert error
  },
  getUserName: function (entryId) {
    return fetch(`http://localhost:8088/users/${entryId}`)
      .then(jsonObj => jsonObj.json())
      .then(jsObject => jsObject.name)
  },
  queryUsers(email) {
  return fetch(`http://localhost:8088/users/?email=${email}`)
    .then(response => response.json())
    .then(response => response.length)
  }
}

export default usersAPI