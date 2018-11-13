import API from "./todo"
import putOnDOM from "./DOMPopulator"

function clearTODODom() {

  document.getElementById("todo__results").innerHTML = ""
  let fetchUserId = sessionStorage.getItem("user_id")
  API.getTodo(fetchUserId)
    .then(todo => {
      putOnDOM.initialTodos(todo)
      // console.log("my todo;", todo.length) 
    //     for(let i = 0; i < todo.length; i++) {
    //       console.log(todo[i])
    //       if( todo[i].completed === true){
    //         let completedDiv = document.getElementById("todo__complete")
    //         completedDiv.appendChild(todo[i])
    //       }
    // }
  })
    
  //a .then that filters completed true false and puts it in the correct div
}

export default clearTODODom

