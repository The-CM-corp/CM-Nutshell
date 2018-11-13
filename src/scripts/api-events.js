const eventsAPI = {
  getData(user_id) {
    return fetch(`http://localhost:8088/events?user_id=${user_id}`)
      .then(response => response.json())
  },
  saveData(entry) {
    return fetch("http://localhost:8088/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(entry)
    }).then(response => response.json())
  },
  deleteEntry(id) {
    return fetch(`http://localhost:8088/events/${id}`, {
      method: "DELETE"
    }).then(response => response.json())
  },
  editEntry(id, object) {
    return fetch(`http://localhost:8088/events/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(object)
    }).then(response => response.json())
  },
}

export default eventsAPI