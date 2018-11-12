console.log("hello")

// I made a change to main.js to import and call a function from news.js (2 lines)
// ALSO I added removed lots of lines from the news pre-filled section in index
// index just needs the following:
// <div id = "news__container" class = "category__container">
//   <h1>NEWS</h1> 
//   <h3><a href="#" id ="add__news">add article</a></h3>
//   <div id="add__news__form" class="add_content_form hide"></div> 
//   <div id="news__results" class="news__element"></div> 
// </div>




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
  <div>
    <h2>${entry.title}</h2>
    <p>${entry.synopsis}</p>
    <a href="${entry.url}">${entry.title}</a><br>
    <button id="deleteNews!${entry.id}">Delete</button>
    <button id="editNews!${entry.id}">Edit</button>

  </div>
  `
}

// fetch obj with a get, post, delete, edit, and target single entry

const newsUrl = "http://localhost:8088/news"
const newsDataManager = {
  newsGetEntries: () => {
    return fetch(`${newsUrl}`)
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
  newsDataManager.newsGetEntries()
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
    // below will check to make sure all inputs are filled out before saving to DB
    if (!news__title || !news__synopsis || !news__url) {
      alert("fill out the form")
    } else {
      document.querySelector("#news__results").innerHTML = ""
      const newsEntry = {
        title: news__title,
        synopsis: news__synopsis,
        url: news__url
      }
      // save the info and then once the promise is fulfilled
      newsDataManager.newsSaveEntry(newsEntry).then(() => {
        // clear inputs
        newsFormManager.newsClearForm()
        // and post it to the DOM
        newsDomRender()
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
      console.log("delete id", id)
      newsDataManager.newsDeleteEntry(id).then(() =>
        newsDomRender()
      )
    }
    // below the eventlistener is targeting an id that starts with the string "editNews"
    // it's looking for the id from the entry associated with the edit button and performs a get from the database but returns the values to the input boxes
    if (event.target.id.startsWith("editNews")) {
      const id = event.target.id.split("!")[1]
      newsDataManager.newsSingleEntry(id).then((entry) => {
        document.querySelector("#news__form__title").value = entry.title
        document.querySelector("#news__form__synopsis").value = entry.synopsis
        document.querySelector("#news__form__url").value = entry.url
      })

      // I'm not sure how to also delete the old entry so I'm putting in an alert for the user
      alert("Make sure to delete your old entry")
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

export {
  news
}