import elementCreator from "./elementFactory"
// ?generic template
const putOnDOM = {
  postNewMessage(chatObject) {
    let name = elementCreator.elementFactory("a", "placeholder for username", null, null, "")
    let time = elementCreator.elementFactory("p", chatObject.time, null, null, null, null)
    let message = elementCreator.elementFactory("p", chatObject.message, null, null, null, null)
    let messageHolder = elementCreator.elementFactory("section", null, "chatSection", `message-${chat.id}`, name, time, message)
    //appending our new elements to the fragment then the fragment to or article
    let fragment = document.createDocumentFragment()
    let chatOutput = document.querySelector("#chat__results")
    fragment.appendChild(messageHolder)
    chatOutput.appendChild(fragment)
  },

  // loops over all of one type of entry and populates multiple ones at a time
  initialChat(chatObjects) {
    chatObjects.forEach(chatObject => {
      putOnDOM.postNewMessage(chatObject)
    })
  }
}