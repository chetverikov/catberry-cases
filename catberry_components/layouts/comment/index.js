class LayoutsComment {
  render() {
    return this.$context.getStoreData()
      .then(comment => `
        (<cat-components-author author="${comment.author}"></cat-components-author>)
        <div class="text">
          ${comment.text}
        </div>
        <cat-components-datatime datatime="${comment.created}" format="d-m-Y"></cat-components-datatime>
        <br />
        <textarea></textarea><button type="button">Жмых</button>
        <hr />
      `);
  }

  bind() {
    return {
      click: {
        button: this.handleEditComment
      }
    }
  }

  handleEditComment() {
    this.$context.sendAction('UpdateComment', this.$context.element.querySelector('textarea').value);
  }
}

module.exports = LayoutsComment;
