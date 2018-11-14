import timestamp from "./timestamp"

// html form representation and clear form values
const newsFormManager = {
  newsHtmlForm: () => {
    return `
    <div>
    Title: <br>
    <input type="text" name="Title" id="news__form__title" placeholder="News Title"><br>
    Synopsis: <br>
    <input type="textarea" name="Synopsis" id="news__form__synopsis" placeholder="Tell Us More"><br>
    URL: <br>
    <input type="text" name="URL" id="news__form__url" placeholder="Give Us the Link"><br>
    </div>
    <button id="news__form__save">Save</button><br><br>
    `
  },
  newsClearForm: () => {
    document.querySelector("#news__form__title").value = ""
    document.querySelector("#news__form__synopsis").value = ""
    document.querySelector("#news__form__url").value = ""
  }
}

// representation of DOM entries
// added the edit and delete buttons here
const newsHtmlEntry = (entry) => {
  return `
  <div class="news__div" id="news__div${entry.id}">
    <h4>${entry.title}</h4>
    <p>${entry.synopsis}</p>
    <a href="http://${entry.url}">${entry.url}</a><br>
    <p>${entry.timestamp}</p>
    <button id="editNews!${entry.id}" class="edit__button">Edit</button>
    <button id="deleteNews!${entry.id}" class="delete__button">Delete</button>

  </div>
  `
}


// fetch obj with a get, post, delete, edit, and target single entry

const newsUrl = "http://localhost:8088/news"
const newsDataManager = {
  newsGetEntries: (user_id) => {
    return fetch(`http://localhost:8088/news?user_id=${user_id}&_sort=timestamp&_order=desc`)
      .then(res => res.json())
  },
  newsSaveEntry: (entry) => {
    return fetch(`${newsUrl}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(entry)

    }).then(res => res.json())
  },
  newsDeleteEntry: (id) => {
    return fetch(`${newsUrl}/${id}`, {
      method: "DELETE"
    }).then(res => res.json())
  },
  newsEditEntry: (entry, id) => {
    return fetch(`${newsUrl}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(entry)
    }).then(res => res.json())
  },
  newsSingleEntry: (id) => {
    return fetch(`${newsUrl}/${id}`)
      .then(res => res.json())
  }
}

// target the div element in index for news results and put the content from the news DB there

const newsDom = (entry) => {
  document.querySelector("#news__results").innerHTML += entry
}

const newsDomRender = () => {
  // clear the section before rendering DB news entries in the DOM
  document.querySelector("#news__results").innerHTML = ""
  let fetchUserId = sessionStorage.getItem("user_id")
  newsDataManager.newsGetEntries(fetchUserId)
    .then(entries => {
      entries.forEach(entry => {
        const newsEntryHTML = newsHtmlEntry(entry)
        newsDom(newsEntryHTML)
      })
    })
}

// saveNews function to target button and grab values from inputs to be posted and displayed

const saveNews = () => {
  document.querySelector("#news__form__save").addEventListener("click", () => {
    const news__title = document.querySelector("#news__form__title").value
    const news__synopsis = document.querySelector("#news__form__synopsis").value
    const news__url = document.querySelector("#news__form__url").value
    const news__session__user__id = sessionStorage.getItem("user_id")
    const newsEntry = {
      title: news__title,
      synopsis: news__synopsis,
      url: news__url,
      user_id: +news__session__user__id,
      timestamp: timestamp()
    }
    if (event.target.id.startsWith("news__form__save")) {
      // below will check to make sure all inputs are filled out before saving to DB
      if (!news__title || !news__synopsis || !news__url) {
        alert("fill out all boxes")
      } else {
        document.querySelector("#news__results").innerHTML = ""

        // save the info and then once the promise is fulfilled
        newsDataManager.newsSaveEntry(newsEntry).then(() => {
          // clear inputs
          newsFormManager.newsClearForm()
          // and post it to the DOM
          newsDomRender()
        })
      }
    }
    if (event.target.id.startsWith("editNews")) {
      const id = event.target.id.split("!")[1]
      newsDataManager.newsEditEntry(newsEntry, id).then(() => {
        newsFormManager.newsClearForm()
        newsDomRender()
        document.getElementById(`editNews__form!${id}`).id = "news__form__save"
      })
    }

  })
}

// This is the function for deleting and editing a news entry

const newsEdit = () => {
  document.querySelector("#news__results").addEventListener("click", event => {
    // below the eventlistener is targeting an id that starts with the string "deleteNews"
    // it then finds the id of the entry associated with the clicked button and performs a delete method from the DB and renders the new DB results
    if (event.target.id.startsWith("deleteNews")) {
      const id = event.target.id.split("!")[1]
      newsDataManager.newsDeleteEntry(id).then(() =>
        newsDomRender()
      )
    }
    // below the eventlistener is targeting an id that starts with the string "editNews"
    // it's looking for the id from the entry associated with the edit button and performs a get from the database but returns the values to the input boxes
    if (event.target.id.startsWith("editNews")) {
      const id = event.target.id.split("!")[1]
      document.querySelector("#news__form__save").id = `editNews__form!${id}`
      newsDataManager.newsSingleEntry(id).then((entry) => {
        document.querySelector("#news__form__title").value = entry.title
        document.querySelector("#news__form__synopsis").value = entry.synopsis
        document.querySelector("#news__form__url").value = entry.url
      })
    }
  })
}

const news = () => {
  // below will display the news form to the DOM
  document.querySelector("#add__news__form").innerHTML = newsFormManager.newsHtmlForm()
  // this function displays any saved entries
  newsDomRender()
  // this function POSTs to the DB and displays to dom when "save" is clicked
  saveNews()
  // This function listens for the delete and edit buttons and acts accordingly
  newsEdit()
}

export default news