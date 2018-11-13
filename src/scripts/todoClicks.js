import API from "./todo"
import clearTODODom from "./todoClearDOM"


const todoClicks = () => {
  document.getElementById("todo__all").addEventListener("click", event => {
    // below the eventlistener is targeting an id that starts with the string "deleteNews"
    // it then finds the id of the entry associated with the clicked button and performs a delete method from the DB and renders the new DB results
    if (event.target.id.startsWith("todoDelete")) {
      const id = event.target.id.split("!")[1]
      console.log("delete id", id)
      API.deleteTodo(id).then(() => {
        clearTODODom()
      })
    } else if (event.target.id.startsWith("todoEdit")) {
      const id = event.target.id.split("!")[1]
      console.log("edit id", id)
      // API.deleteTodo(id).then(() => {
      //   clearTODODom()
      // })
    }
  })
  document.getElementById("todo__all").addEventListener("change", event => {
    if (event.target.id.startsWith("todoCheckbox")) {
      const id = event.target.id.split("!")[1]
      let text = document.getElementById(`todo__text!${id}`)
      let checkTaskDiv = document.getElementById(`todo__div${id}`)
      let checkedDiv = document.getElementById("todo__complete")
      let uncheckedDiv = document.getElementById("todo__results")
      if (event.target.checked === true) {
        API.patchTodo(id, { "completed": true })
      
        text.classList.add("todo__checked")
        checkedDiv.appendChild(checkTaskDiv)
      
      } else if (event.target.checked === false) {
        text.classList.remove("todo__checked")
        uncheckedDiv.appendChild(checkTaskDiv)
        API.patchTodo(id, { "completed": false })
      }
    }
  })

 
}



export default todoClicks