// creates a dynamic form for todo

const API = {
  getTodo() {
    return fetch("http://localhost:8088/todos")
    .then(data => data.json())
  },
  postTodo (newTodo) {
    return fetch("http://localhost:8088/todos",{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newTodo)
    }).then(data => data.json())
  },
  // not sure how the patch works yet..
  patchTodo(editedTodo, id) {
    return fetch(`http://localhost:8088/todos/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedTodo)
    }).then(data => data.json())
  },
  deleteTodo(id) {
    return fetch(`http://localhost:8088/todos/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }//,
      // body: JSON.stringify(todoToDelete)
    })
  }
}


export default API



