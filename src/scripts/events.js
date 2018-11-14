import eventsAPI from "./api-events"
import putOnDOM from "./DOMPopulator"
// import checkInputs from "./formValidation"


function clearData() {
  let eventDataResults = document.getElementById("event__results");
  eventDataResults.innerHTML = "";
}

function eventsGenerator() {
  clearData()
  let fetchUserId = sessionStorage.getItem("user_id")

  eventsAPI.getData(fetchUserId)
    .then((eventData) => {
      let sortedEvents = eventData.sort(function (a, b) {
        return a.date.localeCompare(b.date);
      });
      putOnDOM.intialEvents(sortedEvents)
      $("#event__results").children().first().addClass("first__event")
      addDeleteEvent()
      addEditEvent()
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

  // form validation
  // checkInputs()

  // create a new event object
  let newObject = { title: eventFormTitleEl.value, date: eventFormDateEl.value, synopsis: eventFormSynopsisEl.value, location: eventFormLocationEl.value, user_id: +sessionUserId }
  eventsAPI.saveData(newObject).then(() => {
    clearData();
  }).then(() => eventsGenerator())
}

function addDeleteEvent() {
  // the following selects all delete buttons
  $(".event__delete__button").click(function () {
    eventsAPI.deleteEntry($(this).attr("id"))
      .then(() => {
        clearData()
        eventsGenerator()
      })
  })
}



function addEditEvent() {
  // the following selects all edit buttons and adds editing capability

  $(".event__edit__button").click(function () {
    $(this).parent().children().last().toggle("hide")
  })

  $(".event__edit__save__button").click(function () {
    let thisEditedId = $(this).attr("id")
    let editedTitleInput = document.getElementById(`edit__eventTitleInput__${thisEditedId}`)
    let editedDateInput = document.getElementById(`edit__eventDateInput__${thisEditedId}`)
    let editedSynopsisInput = document.getElementById(`edit__eventSynopsisInput__${thisEditedId}`)
    let editedLocationInput = document.getElementById(`edit__eventLocationInput__${thisEditedId}`)
    let sessionUserId = sessionStorage.getItem("user_id");

    let EditedObject = { title: editedTitleInput.value, date: editedDateInput.value, synopsis: editedSynopsisInput.value, location: editedLocationInput.value, user_id: +sessionUserId }
    eventsAPI.editEntry(thisEditedId, EditedObject)
      .then(() => {
        clearData()
        eventsGenerator()
      })
  })


  $(".event__edit__cancel__button").click(function () {
    $(this).parent().toggle("hide");
  })

}

export default eventsGenerator
