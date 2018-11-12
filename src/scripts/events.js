import eventsAPI from "./api-events"
import putOnDOM from "./DOMPopulator"


function clearData() {
  let eventDataResults = document.getElementById("event__results");
  eventDataResults.innerHTML = "";
}

function eventsGenerator() {
  clearData()
  let fetchUserId = sessionStorage.getItem("user_id")

  eventsAPI.getData(fetchUserId)
    .then((eventData) => {
      putOnDOM.intialEvents(eventData)
      addDeleteEvent()
    })
}


$("#add__event__button").click(function () {
  submitEventForm()
})

function submitEventForm() {
  let eventFormTitleEl = document.getElementById("add__event__title")
  let eventFormLocationEl = document.getElementById("add__event__location")
  let eventFormDateEl = document.getElementById("add__event__date")
  let eventFormSynopsisEl = document.getElementById("add__event__synopsis")
  let sessionUserId = sessionStorage.getItem("user_id");
  console.log("session id:", sessionUserId)

  // create a new event object
  let newObject = { title: eventFormTitleEl.value, date: eventFormDateEl.value, synopsis: eventFormSynopsisEl.value, location: eventFormLocationEl.value, user_id: +sessionUserId }
  eventsAPI.saveData(newObject).then(() => {
    console.log("new object", newObject);
    clearData();
  }).then(() => eventsGenerator())
}

function addDeleteEvent() {
  // the following selects all delete buttons
  $(".event__delete__button").click(function () {
    console.log("delete button clicked")
    eventsAPI.deleteEntry($(this).attr("id"))
      .then(() => {
        clearData()
        eventsGenerator()
    })
  })
}

export default eventsGenerator
