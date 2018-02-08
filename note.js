const Note = (function () {
  allNotes = []
  return class Note {
    constructor({title, body, user_id, id}) {
      this.title = title
      this.body = body
      this.user_id = user_id
      this.id = id
      allNotes.push(this)
    }

    renderHTML() {
      let noteListItem = document.createElement("li")
      // let noteListLink = document.createElement("a")
      // let noteListUrl = `#`
      // noteListLink.href = noteListUrl
      // let noteListText = document.createTextNode(this.title)
      noteListItem.innerHTML = `<a href="#" data-id=${this.id}>${this.title}</a>`
      noteListItem.addEventListener("click", (event) => { this.renderNoteForm() })
      // noteListLink.append(noteListText)
      // noteListItem.append(noteListLink)
      return noteListItem
    }

    render() {
      return this.renderHTML()
    }

    renderNoteHTML() {
      // let note = allNotes.filter(function(n) {
      //   return n.id == id
      // })
      // debugger
      let noteContainer = document.createElement('div')
      let noteTitle = document.createElement('h3')
      let noteBody = document.createElement('p')
      let noteTitleText = document.createTextNode(this.title)
      // debugger
      // let noteBodyText = document.createTextNode(this.body)
      noteTitle.append(noteTitleText)
      noteBody.innerHTML = this.body.replace(/\\n/g, "<br />")
      noteContainer.append(noteTitle)
      noteContainer.append(noteBody)
      let noteDiv = document.getElementById('note')
      noteDiv.innerHTML = ""
      noteDiv.append(noteContainer)
      return noteContainer
      // use this in console to append note for testing css
    }

    renderNoteForm() {
      let noteContainer = document.createElement('div')
      let noteBodyText = this.body.replace(/\\n/g, "&#13;&#10;")
      let noteForm = `<form id="edit-note-form" data-id="${this.id}" action="">
                        <input id="note-title" type="text" value="${this.title}"><br>
                        <textarea id="note-body">${noteBodyText}</textarea><br>
                        <input id="note-save" type="submit" value="Save">
                        <input id="note-delete" type="submit" value="Delete">
                      </form>`
      noteContainer.innerHTML = noteForm
      let noteDiv = document.getElementById('note')
      noteDiv.innerHTML = ""
      noteDiv.append(noteContainer)
      let saveButton = document.getElementById('note-save')
      let deleteButton = document.getElementById('note-delete')              
      saveButton.addEventListener("click", (event) => {
        let newTitle = document.getElementById("note-title").value
        let newBody = document.getElementById("note-body").innerText
        NoteApi.updateNote(this.id, newTitle, newBody)
        })
      deleteButton.addEventListener("click", (event) => { 
        let noteId = this.id
        NoteApi.deleteNote(noteId)
        noteDiv.innerHTML = ""
        let listItem = document.querySelector(`[data-id="${noteId}"]`).parentNode
        debugger
        listItem.parentNode.removeChild(listItem)
        })
      return noteContainer
    }

    renderNote() {
      // debugger
      return this.renderNoteHTML()
    }
  }
})();