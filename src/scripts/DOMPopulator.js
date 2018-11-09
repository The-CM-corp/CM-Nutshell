import elementCreator from "./elementFactory"
// ?generic template
const putOnDOM = {


















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