import elementCreator from "./elementFactory"
// generic template

const putOnDOM = {
  postNewToDO(entry) {
    let entryTask = elementCreator.elementFactory("p", entry.task, "toDo__task", `ToDoTask__${entry.id}`)
    let entryDate = elementCreator.elementFactory("p", entry.date, "toDO__date", `ToDoDate__${entry.id}`)
    let entryCheck = elementCreator.elementFactory("input type='checkbox'", null, "toDO__checkbox", `ToDoCheckbox__${entry.id}`)
    let entryHolder = elementCreator.elementFactory("div", null, "toDoDiv", `ToDo__${entry.id}`, entryTask, entryDate, entryCheck)
    //appending our new elements to the fragment then the fragment to or article  
    let fragment = document.createDocumentFragment()
    fragment.appendChild(entryHolder)
    let toDoOutput = document.getElementById("todo__results")
    toDoOutput.appendChild(fragment)
  },
  // loops over all of one type of entry and populates multiple ones at a time
  initialToDos(entries) {
    entries.forEach(entry => {
      putOnDOM.postNewToDO(entry)
    })
  }
}