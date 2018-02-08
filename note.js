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
      noteListItem.innerHTML = `<a href="#" data-id=${this.id} on-click="${this.renderNote()}">${this.title}</a>`
      // noteListLink.append(noteListText)
      // noteListItem.append(noteListLink)
      return noteListItem
    }

    render() {
      return this.renderHTML()
    }

    renderNoteHTML() {
      debugger
      let noteContainer = document.createElement('div')
      let noteTitle = document.createElement('h3')
      let noteBody = document.createElement('p')
      let noteTitleText = document.createTextNode(this.title)
      // let noteBodyText = document.createTextNode(this.body)
      noteTitle.append(noteTitleText)
      noteBody.innerHTML = this.body.replace(/\\n/g, "<br />")
      noteContainer.append(noteTitle)
      noteContainer.append(noteBody)
      return noteContainer
      // use this in console to append note for testing css
      // document.getElementById('note').append(noteContainer)
    }

    renderNote() {
      return this.renderNoteHTML()
    }
  }
})();