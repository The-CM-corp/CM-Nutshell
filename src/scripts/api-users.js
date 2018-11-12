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
    // fetch db
    return fetch(`http://localhost:8088/users?name=${user}`)
      .then(response => response.json())
      .then(data => {
        sessionStorage.setItem("user_id", data[0].id)
        sessionStorage.setItem("user_name", data[0].name)
      }
        )
      // if no match found, throw alert error
  }
}

export default usersAPI