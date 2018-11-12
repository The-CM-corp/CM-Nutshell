const eventsAPI = {
  getData(dataType) {
    return fetch(`http://localhost:8088/${dataType}`)
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
}

export default eventsAPI