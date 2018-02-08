const NoteApi = (function () {
  return class NoteApi {
    static fetchNotes() {
      return fetch("http://localhost:3000/api/v1/notes").then(res => res.json())
    }
    static createNote(title, body, user_id) {
      return fetch("http://localhost:3000/api/v1/notes", {
        method: "post",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title: title,
          body: body,
          user_id: user_id
        })
      })
      .then(res => res.json())
    }
  }
})();