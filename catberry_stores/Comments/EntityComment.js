class CommentsEntityComment {

  constructor() {
    this.$context.setDependency('Entities/Entities');
  }

  /**
   * Loads data from somewhere.
   * @returns {Object} Data object.
   */
  load() {
    const {'entity-id': entityId, 'comment-id': commentId} = this.$context.params;

    return this.$context.getStoreData('Entities/Entities')
      .then(entities => {
        const entity = entities.find(e => e.id === entityId);

        if (!entity) {
          return this.$context.notFound();
        }

        const comments = entity.comments || [];
        const comment = comments.find(c => c.id === commentId);

        return comment || {};
      });
  }
}

module.exports = CommentsEntityComment;
