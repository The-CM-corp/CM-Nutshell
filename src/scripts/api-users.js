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
  deleteEntry(id) {
    return fetch(`http://localhost:8088/users/${id}`, {
      method: "DELETE"
    }).then(response => response.json())
  },
}

export default usersAPI