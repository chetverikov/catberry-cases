class CommentsEntityComments {
  constructor() {
    this.$context.setDependency('Entities/Entities');
  }

  /**
   * Loads data from somewhere.
   * @returns {Object} Data object.
   */
  load() {
    const entityId = this.$context.params['entity-id'];

    return this.$context.getStoreData('Entities/Entities')
      .then(entities => {
        const entity = entities.find(e => e.id === entityId);

        return entity && entity.comments || [];
      });
  }
}

module.exports = CommentsEntityComments;
