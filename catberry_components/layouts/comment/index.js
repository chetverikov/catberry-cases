class LayoutsComment {
  render() {
    return this.$context.getStoreData()
      .then(comment => `
        <a href="/entities/${comment.id}"><cat-components-title title="${comment.name}"></cat-components-title></a> 
        (<cat-components-author author="${comment.author}"></cat-components-author>)
        <div class="text">
          ${comment.text}
        </div>
        <cat-components-datatime datatime="${comment.created}" format="d-m-Y"></cat-components-datatime>
      `);
  }
}

module.exports = LayoutsComment;
