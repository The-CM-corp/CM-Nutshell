const API = {
  getTodo(user_id) {
    return fetch(`http://localhost:8088/todos?user_id=${user_id}&_sort=date&_order=asc`)
      .then(data => data.json())
  },
  postTodo(newTodo) {
    return fetch("http://localhost:8088/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newTodo)
    }).then(data => data.json())
  },
  patchTodo(id, editedTodo) {
    return fetch(`http://localhost:8088/todos/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedTodo)
    })
  },
  deleteTodo(id) {
    return fetch(`http://localhost:8088/todos/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
  }
}

export default API



