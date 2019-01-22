const fetch = require('node-fetch');

class EntitiesEntity {
  constructor() {
    this.$context.setDependency('Entities/Entities');
  }

  /**
   * Loads data from somewhere.
   * @returns {Object} Data object.
   */
  load() {
    const params = this.$context.params;
    const entityId = this.$context.state.entityId;

    if ('entity-id' in params) {
      return this.$context.getStoreData('Entities/Entities')
        .then(entities => entities.find(entity => entity.id === params['entity-id']))
    }

    return fetch(`http://localhost:3000/api/entities/${entityId}`)
      .then(response => response.json());
  }
}

module.exports = EntitiesEntity;
