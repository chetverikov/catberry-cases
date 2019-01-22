class CommentsEntityComment {

  constructor() {

  }

  /**
   * Loads data from somewhere.
   * @returns {Object} Data object.
   */
  load() {
    const {'entity-id': entityId, 'comment-id': commentId} = this.$context.params;

    return this.$context.getStoreData('Comments/EntityComments', {'entity-id': entityId})
      .then((comments = []) => {
        const comment = comments.find(c => c.id === commentId);

        return comment || {};
      });
  }
}

module.exports = CommentsEntityComment;
