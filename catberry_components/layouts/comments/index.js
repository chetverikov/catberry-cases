class LayoutsComments {
  render() {
    const entityId = this.$context.attributes['cat-param-entity-id'];

    return this.$context.getStoreData()
      .then(comments => comments
        .map((comment) => `
            <cat-layouts-comment cat-store="Comments/EntityComment" cat-param-comment-id="${comment.id}" cat-param-entity-id="${entityId}"></cat-layouts-comment>
        `)
        .join('')
      );
  }
}

module.exports = LayoutsComments;
