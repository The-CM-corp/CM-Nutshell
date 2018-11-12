import elementCreator from "./elementFactory"
// generic template

const putOnDOM = {
  postNewMessage(entry) {
    let chatName = elementCreator.elementFactory("a", entry.user_id, "chat__name", `chat__name${entry.id}`, "#")
    let chatTime = elementCreator.elementFactory("p", entry.time, "chat__time", `chat__time${entry.id}`)
    let chatMessage = elementCreator.elementFactory("p", entry.message, "chat__message", `chat_message${entry.id}`)
    let chatEditBtn = elementCreator.elementFactory("button", "Edit", "btn__chat__edit", `btn__chat__edit${entry.id}`)
    let chatDeleteBtn = elementCreator.elementFactory("button", "Delete", "btn__chat__delete", `btn__chat__delete-${entry.id}`)
    let chatHolder = elementCreator.elementFactory("div", null, "chat__div", `chat__div${entry.id}`, null, chatName, chatTime, chatMessage, chatEditBtn, chatDeleteBtn)
    let fragment = document.createDocumentFragment()
    let chatOutput = document.querySelector("#chat__results")
    fragment.appendChild(chatHolder)
    chatOutput.appendChild(fragment)
  },

  // loops over all of one type of entry and populates multiple ones at a time
  initialChats(entries) {
    entries.forEach(entry => {
      putOnDOM.postNewMessage(entry)
    })
  },
  postNewTodo(entry) {
    let entryTask = elementCreator.elementFactory("h3", entry.task, "todo__task", `todo__task${entry.id}`)
    let entryDate = elementCreator.elementFactory("p", `Expected completion date: ${entry.date}`, "todo__date", `todo__date${entry.id}`)
    let entryText = elementCreator.elementFactory("div", null, "todo__text", `todo__text!${entry.id}`, null, entryTask, entryDate)
    let entryEdit = elementCreator.elementFactory("button", "Edit", "todo__edit", `todoEdit!${entry.id}`)
    let entryDelete = elementCreator.elementFactory("button", "Delete", "todo__delete", `todoDelete!${entry.id}`)
    let entryButtons = elementCreator.elementFactory("div", null, "todo__buttons", `todo__buttons${entry.id}`, null, entryEdit, entryDelete)
    let entryCheck = elementCreator.elementFactory("input", null, "todo__checkbox", `todoCheckbox!${entry.id}`)
    entryCheck.type = "checkbox"
    let entryHolder = elementCreator.elementFactory("div", null, "todo__div", `todo__div${entry.id}`, null,   entryCheck, entryText, entryButtons)
    //appending our new elements to the fragment then the fragment to or article
    let fragment = document.createDocumentFragment()
    fragment.appendChild(entryHolder)
    let todoOutput = document.getElementById("todo__results")
    todoOutput.appendChild(fragment)
  },
  initialTodos(entries) {
    entries.forEach(entry => {
      putOnDOM.postNewTodo(entry)
    })
  },
  postNewNews(entry) {
    let newsTitle = elementCreator.elementFactory("h2", entry.title, "news__title", `news__title${entry.id}`)
    let newsSynopsis = elementCreator.elementFactory("p", entry.synopsis, "news__synopsis", `news__synopsis${entry.id}`)
    let newsURL = elementCreator.elementFactory("p", entry.url, "news__url", `news__url${entry.id}`)
    let newsHolder = elementCreator.elementFactory("div", null, "news__div", `news__div${entry.id}`, null, newsTitle, newsSynopsis, newsURL)
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
  },
  postNewEvent(entry) {
    let eventTitle = elementCreator.elementFactory("h2", entry.title, "event__title", `event__title${entry.id}`)
    let eventSynopsis = elementCreator.elementFactory("p", entry.synopsis, "event__synopsis", `event__synopsis${entry.id}`)
    let eventDate = elementCreator.elementFactory("p", entry.date, "event__date", `event__date${entry.id}`)
    let eventLocation = elementCreator.elementFactory("p", entry.location, "event__location", `event__location${entry.id}`)
    let eventEditBtn = elementCreator.elementFactory("button", "edit", "edit__button", `${entry.id}`, "#")
    let eventDeleteBtn = elementCreator.elementFactory("button", "delete", "delete__button", `${entry.id}`, "#")
    let eventHolder = elementCreator.elementFactory("div", null, "event__div", `event__div${entry.id}`, null, eventTitle, eventDate, eventSynopsis, eventLocation, eventEditBtn, eventDeleteBtn)
    //appending our new elements to the fragment then the fragment to or article
    let fragment = document.createDocumentFragment()
    fragment.appendChild(eventHolder)

    let eventOutput = document.getElementById("event__results")
    eventOutput.appendChild(fragment)
  },

  // loops over all of one type of entry and populates multiple ones at a time
  intialEvents(entries) {
    entries.forEach(entry => {
      putOnDOM.postNewEvent(entry)
    })
  }
}

export default putOnDOM