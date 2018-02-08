const Note = (function () {
  return class Note {
    constructor({title, body, user_id, id}) {
      this.title = title
      this.body = body
      this.user_id = user_id
      this.id = id
    }

    renderHTML() {
      let noteListItem = document.createElement("li")
      let noteListLink = document.createElement("a")
      let noteListUrl = `#`
      noteListLink.href = noteListUrl
      let noteListText = document.createTextNode(this.title)
      noteListLink.append(noteListText)
      noteListItem.append(noteListLink)
      return noteListItem
    }

    render() {
      return this.renderHTML()
    }

    renderNoteHTML() {
      let noteContainer = document.createElement('div')
      let noteTitle = document.createElement('h3')
      let noteBody = document.createElement('p')
      let noteTitleText = document.createTextNode(this.title)
      let noteBodyText = document.createTextNode(this.body)
      noteTitle.append(noteTitleText)
      noteBody.append(noteBodyText)
      noteContainer.append(noteTitle)
      noteContainer.append(noteBody)
      return noteContainer
    }

    renderNote() {
      return this.renderNoteHTML()
    }
  }
})();