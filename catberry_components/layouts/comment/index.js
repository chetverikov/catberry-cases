class LayoutsComment {
  render() {
    return this.$context.getStoreData()
      .then(comment => `
        (<cat-components-author author="${comment.author}"></cat-components-author>)
        <div class="text">
          ${comment.text}
        </div>
        <cat-components-datatime datatime="${comment.created}" format="d-m-Y"></cat-components-datatime>
        <hr />
      `);
  }
}

module.exports = LayoutsComment;
