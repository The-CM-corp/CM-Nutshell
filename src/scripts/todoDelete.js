import API from "./todo"
import putOnDOM from "./DOMPopulator"

function clearTODODom() {
  document.getElementById("todo__results").innerHTML = ""
  API.getTodo()
    .then(todo => {
      putOnDOM.initialTodos(todo)})
}

const todoClicks = () => {
  document.getElementById("todo__results").addEventListener("click", event => {
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
  document.getElementById("todo__results").addEventListener("change", event => {
    if (event.target.id.startsWith("todoCheckbox")){
      const id = event.target.id.split("!")[1]
      console.log("checked id", id)
      let text = document.getElementById(`todo__text!${id}`)
      console.log(text) 
      // text.classList.add("todo__checked")
      // if (id === text.id.split("!")[1]){
      //   console.log(text)
      // }
    }
  })
}





// function onCheckbox() {
//   let checkbox = document.querySelectorAll('input[type =checkbox]')
//   if (checkbox.length >= 2) {
//     checkbox.forEach(box => {
//       box.addEventListener("change", () =>{
//         console.log("checked in js")
//         console.log(box)
//       })
//     })
//   }else checkbox.addEventListener("change", () => {
//     console.log("just one event")
//   // })
//   // $('input[type =checkbox]').change(() => {
//   //   console.log("JQUERY HELP ME")
//   //   console.log($('input[type =checkbox]').siblings(".todo__checkbox").toggle("todo__checked")) 
//     // $("todo__checkbox").toggle("todo__checked")
//   })
// }

export default todoClicks