const fetch = require('node-fetch');

class EntitiesEntities {
  constructor() {
    if (this.$context.isBrowser) {
      window.entitiesStore = this;
    }

    this.entities = null;
    this.hashOfComments = null;
  }

  /**
   * Loads data from somewhere.
   * @returns {Object} Data object.
   */
  load() {
    return fetch('http://localhost:3000/api/entities')
      .then((response) => response.json())
      .then(entities => {
        this.entities = entities;
        this.hashOfComments = {};

        for (const entity of this.entities) {
          if (Array.isArray(entity.comment)) {
            continue;
          }

          for (const comment of entity.comments) {
            this.hashOfComments[comment.id] = comment;
          }
        }

        return this.entities;
      });
  }

  handleCommentHasBeenUpdated({commentId, text}) {
    if (!this.hashOfComments) {
      // Если мы отрендерились с сервера, нам надо загрузить данные. Сделаем это через changed
      return this.$context.changed();
    }

    const comment = this.hashOfComments[commentId];

    if (comment) {
      comment.text = text;

      return comment;
    }
  }
}

module.exports = EntitiesEntities;
