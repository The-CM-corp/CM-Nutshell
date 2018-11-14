import elementCreator from "./elementFactory"

// el, cont, clazz, id, link, type, value, ...children   FOR REFERENCE Parameters in elementCreator

const putOnDOM = {
  postNewMessage(entry) {
    let chatName = elementCreator.elementFactory("a", entry.user.name, "chat__name", `chat__name${entry.id}`, "#")
    let chatTime = elementCreator.elementFactory("p", entry.time, "chat__time", `chat__time${entry.id}`)
    let chatMessage = elementCreator.elementFactory("p", entry.message, "chat__message", `chat_message${entry.id}`)
    let chatEditBtn = elementCreator.elementFactory("button", "Edit", "btn__chat__edit", `btn__chat__edit-${entry.id}`)
    let chatDeleteBtn = elementCreator.elementFactory("button", "Delete", "btn__chat__delete", `btn__chat__delete-${entry.id}`)
    let editInputField = elementCreator.elementFactory("input", null, "hide", `input__chat__edit-${entry.id}`, null, null, entry.message)
    let editInputSave = elementCreator.elementFactory("button", "Save", "btn__chat__input_save hide", `btn__chat__input_save-${entry.id}`)
    let chatHolder;
    if(entry.userId === parseInt(sessionStorage.user_id, 10)) {
      chatHolder = elementCreator.elementFactory("div", null, "chat__div", `chat__div-${entry.id}`, null, null, null, chatName, chatTime, chatMessage, chatEditBtn, chatDeleteBtn, editInputField, editInputSave)
    } else {
      chatHolder = elementCreator.elementFactory("div", null, "chat__div", `chat__div-${entry.id}`, null, null, null, chatName, chatTime, chatMessage)
    }
    let fragment = document.createDocumentFragment()
    let chatOutput = document.querySelector("#chat__results")
    fragment.appendChild(chatHolder)
    chatOutput.appendChild(fragment)
  },

  postNewTodo(entry) {
    let entryTask = elementCreator.elementFactory("h3", entry.task, "todo__task", `todo__task${entry.id}`)
    let entryDate = elementCreator.elementFactory("p", `Expected completion date: ${entry.date}`, "todo__date", `todo__date${entry.id}`)
    let entryText = elementCreator.elementFactory("div", null, "todo__text", `todo__text!${entry.id}`, null, null, null, entryTask, entryDate)
    let entryEdit = elementCreator.elementFactory("button", "Edit", "todo__edit", `todoEdit!${entry.id}`)
    let entryDelete = elementCreator.elementFactory("button", "Delete", "todo__delete", `todoDelete!${entry.id}`)
    let entryButtons = elementCreator.elementFactory("div", null, "todo__buttons", `todo__buttons${entry.id}`, null, null, null, entryEdit, entryDelete)
    let entryCheck = elementCreator.elementFactory("input", null, "todo__checkbox", `todoCheckbox!${entry.id}`)
    entryCheck.type = "checkbox"
    let entryAllButButtons = elementCreator.elementFactory("div", null, "todo__notButtons", `todo__notButtons!${entry.id}`, null, null, null, entryCheck, entryText)
    // edit form
    let editTodoTask = elementCreator.elementFactory("input", null, "todo__edit__task", `todo__edit__task!${entry.id}`, null, "text", entry.task)
    let editTodoDate = elementCreator.elementFactory("input", null, "todo__edit__date", `todo__edit__date!${entry.id}`, null, "text", entry.date)
    let editTodoSaveBtn = elementCreator.elementFactory("button", "Save Edits", "todo__edit__save__button", `todo__edit__save__button!${entry.id}`)
    let editTodoCancelBtn = elementCreator.elementFactory("button", "Cancel", "todo__edit__cancel__button", `todo__edit__cancel__button!${entry.id}`)
    let editTodoHolder = elementCreator.elementFactory("div", null, "todo__edit__div hide", `todo__edit__div${entry.id}`, null, null, null, editTodoTask, editTodoDate, editTodoSaveBtn, editTodoCancelBtn)
    //
    let entryHolder = elementCreator.elementFactory("div", null, "todo__div", `todo__div${entry.id}`, null, null, null, entryAllButButtons, entryButtons, editTodoHolder)
    //appending our new elements to the fragment then the fragment to or article
    let fragment = document.createDocumentFragment()
    fragment.appendChild(entryHolder)
    let todoOutput = document.getElementById("todo__results")
    let completedDiv = document.getElementById("todo__complete")
    if (entry.completed === true) {
      completedDiv.appendChild(fragment)
      entryText.classList.add("todo__checked")
      entryCheck.checked = true
    } else
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
    let newsHolder = elementCreator.elementFactory("div", null, "news__div", `news__div${entry.id}`, null, null, null, newsTitle, newsSynopsis, newsURL)
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
    let eventEditBtn = elementCreator.elementFactory("button", "edit", "event__edit__button", `${entry.id}`, "#")
    let eventEditSaveBtn = elementCreator.elementFactory("button", "save edits", "event__edit__save__button", `${entry.id}`, "#")
    let eventEditCancelBtn = elementCreator.elementFactory("button", "cancel", "event__edit__cancel__button", `${entry.id}`, "#")
    let eventDeleteBtn = elementCreator.elementFactory("button", "delete", "event__delete__button", `${entry.id}`, "#")
    let editEventDate = elementCreator.elementFactory("input", null, "edit__event__input", `edit__eventDateInput__${entry.id}`, null, "date", entry.date)
    let editEventLocation = elementCreator.elementFactory("input", null, "edit__event__input", `edit__eventLocationInput__${entry.id}`, null, "text", entry.location)
    let editEventTitle = elementCreator.elementFactory("input", null, "edit__event__input", `edit__eventTitleInput__${entry.id}`, null, "text", entry.title)
    let editEventSynopsis = elementCreator.elementFactory("input", null, "edit__event__input", `edit__eventSynopsisInput__${entry.id}`, null, "text", entry.synopsis)
    let editEventHolder = elementCreator.elementFactory("div", null, "edit__event__div hide", `edit__event__div${entry.id}`, null, null, null, editEventTitle, editEventDate, editEventSynopsis, editEventLocation, eventEditSaveBtn, eventEditCancelBtn)
    let eventHolder = elementCreator.elementFactory("div", null, "event__div", `event__div${entry.id}`, null, null, null, eventTitle, eventDate, eventSynopsis, eventLocation, eventEditBtn, eventDeleteBtn, editEventHolder)
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