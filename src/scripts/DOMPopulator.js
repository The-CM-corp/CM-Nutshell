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
  initialToDos(entries) {
    entries.forEach(entry => {
      putOnDOM.postNewToDO(entry)
    })
  },
  postNewNews(entry) {
    let newsTitle = elementCreator.elementFactory("h2", entry.title, "news__title", `news__title${entry.id}`)
    let newsSynopsis = elementCreator.elementFactory("p", entry.synopsis, "news__synopsis", `news__synopsis${entry.id}`)
    let newsURL = elementCreator.elementFactory("p", entry.url, "news__url", `news__url${entry.id}`)
    let newsHolder = elementCreator.elementFactory("div", null, "news__section", `news__section${news.id}`, newsTitle, newsSynopsis, newsURL)
    //appending our new elements to the fragment then the fragment to or article  
    let fragment = document.createDocumentFragment()
    fragment.appendChild(newsHolder)

    let newsOutput = document.getElementById("news__results")
    newsOutput.appendChild(fragment)
  },

  // loops over all of one type of entry and populates multiple ones at a time
  intialNews(entries) {
    entries.forEach(entry => {
      putOnDOM.postNewNews(entry)
    })
  }
}