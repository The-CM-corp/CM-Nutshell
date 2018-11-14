import API from "./todo"
import clearTODODom from "./todoClearDOM"


const todoClicks = () => {
  document.getElementById("todo__all").addEventListener("click", event => {
    if (event.target.id.startsWith("todoDelete")) {
      const id = event.target.id.split("!")[1]
      API.deleteTodo(id).then(() => {
        clearTODODom()
      })
    } else if (event.target.id.startsWith("todoEdit")) {
      const id = event.target.id.split("!")[1]
      let editDiv = document.getElementById(`todo__edit__div${id}`)
      editDiv.classList.toggle("hide")
    } else if (event.target.id.startsWith("todo__edit__save__button")) {
      const id = event.target.id.split("!")[1]
      let editedTask = document.getElementById(`todo__edit__task!${id}`)
      let editedDate = document.getElementById(`todo__edit__date!${id}`)
      let userId = sessionStorage.getItem("user_id");
      let editedEntry = { task: editedTask.value, date: editedDate.value, user_id: userId.value }
      API.patchTodo(id, editedEntry).then(() => {
        clearTODODom()
      })
    } else if (event.target.id.startsWith("todo__edit__cancel__button")) {
      const id = event.target.id.split("!")[1]
      let editDiv = document.getElementById(`todo__edit__div${id}`)
      editDiv.classList.add("hide")
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
        text.classList.add("todo__checked")
        checkedDiv.appendChild(checkTaskDiv)
        API.patchTodo(id, { "completed": true }).then(() => {
          clearTODODom()
        })
      } else if (event.target.checked === false) {
        text.classList.remove("todo__checked")
        uncheckedDiv.appendChild(checkTaskDiv)
        API.patchTodo(id, { "completed": false }).then(() => {
          clearTODODom()
        })
      }
    }
  })


}



export default todoClicks