import elementCreator from "./elementFactory"
// ?generic template
const putOnDOM = {
  postNewEntry(entry) {
    let entryTitle = elementCreator.elementFactory("h2", entry.concept)
    let entryContent = elementCreator.elementFactory("p", `${entry.entry} I am ${entry.mood}. ${entry.date}`)
    let entryHolder = elementCreator.elementFactory("section", null, "entrySection", `${entry.id}`, entryTitle, entryContent)
    //appending our new elements to the fragment then the fragment to or article  
    let fragment = document.createDocumentFragment()
    fragment.appendChild(entryHolder)
    entryArt.appendChild(fragment)
  },

  // loops over all of one type of entry and populates multiple ones at a time
  domCreation(entries) {
    entries.forEach(entry => {
      putOnDOM.postNewEntry(entry)

    })
  }
}