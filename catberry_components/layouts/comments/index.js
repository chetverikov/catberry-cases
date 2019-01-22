class LayoutsComments {
  render() {
    return this.$context.getStoreData()
      .then(comments => comments
        .map((comment) => `
            <cat-layouts-comment cat-store="Comments/Comment" cat-param-comment-id="${comment.id}" cat-param-comment-id="${comment.id}"></cat-layouts-comment>
        `)
        .join('')
      );
  }
}

module.exports = LayoutsComments;
