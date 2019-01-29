const fetch = require('node-fetch');

class EntitiesEntities {
  constructor() {
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
    const comment = this.hashOfComments[commentId];

    if (comment) {
      comment.text = text;

      return comment;
    }

    return null;
  }
}

module.exports = EntitiesEntities;
