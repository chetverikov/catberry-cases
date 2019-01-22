const fetch = require('node-fetch');

class EntitiesEntities {

  /**
   * Loads data from somewhere.
   * @returns {Object} Data object.
   */
  load() {
    return fetch('http://localhost:3000/api/entities')
      .then((response) => response.json());
  }
}

module.exports = EntitiesEntities;
