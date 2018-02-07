const App = (function () {
  return class App {
    static init() {
      this.renderNotes();
      let form = document.getElementById("new-note-form");
      form.addEventListener("submit", this.handleSubmit())
    };

    static renderNotes() {
      let notesContainer = document.getElementById("notes-list")
      NoteApi.fetchNotes()
      .then(notes => {
        notes.forEach(function (notesJSON) {
          let note = new Note(notesJSON)
          notesContainer.appendChild(note.render())
        })
      } );
    };


    static handleSubmit(event) {
      event.preventDefault();
      let formInput = document.getElementById("new-note-form")
      NoteAPI.createNote(formInput.value)
      .then(json => {
        let notesContainer = document.getElementById("notes-list")
        let note = new Note(json)
        notesContainer.appendChild(note.render())
      })
    }

  }
})();