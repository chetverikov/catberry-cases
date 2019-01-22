class EntityComments {
  constructor() {
    this.$context.setDependency('Entities/Entities');
  }

  /**
   * Loads data from somewhere.
   * @returns {Object} Data object.
   */
  load() {
    const entityId = this.$context.params['entity-id'];

    return this.$context.getStoreData()
      .then(entities => {
        const entity = entities.find(e => e.id === entityId);

        if (!entity) {
          return this.$context.notFound();
        }

        return entity.comments || [];
      });
  }
}

module.exports = EntityComments;
