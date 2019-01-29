const fetch = require('node-fetch');

class CommentsEntityComment {

  constructor() {
    this.needRequestToAPI = false;
  }

  /**
   * Loads data from somewhere.
   * @returns {Object} Data object.
   */
  load() {
    const {'entity-id': entityId, 'comment-id': commentId} = this.$context.params;

    if (this.needRequestToAPI) {
      this.needRequestToAPI = false;

      return fetch(`http://localhost:3000/api/comments/${commentId}`)
        .then((response) => response.json());
    }


    return this.$context.getStoreData('Comments/EntityComments', {'entity-id': entityId})
      .then((comments = []) => {
        const comment = comments.find(c => c.id === commentId);

        return comment || {};
      });
  }

  handleUpdateComment(text) {
    const {'comment-id': commentId} = this.$context.params;

    return fetch(`http://localhost:3000/api/comments/${commentId}`, {
      method: 'PATCH',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({text})
    })
      .then((response) => response.json())

      // Т.к страница рендериться из массива Entities/Entities
      // то надо сообщить что comment изменился. Entities/Entities обновит у себя кэшь
      .then(() => this.$context.sendAction('Entities/Entities', 'CommentHasBeenUpdated', {commentId, text}))
      .then(comment => {
        if (!comment) {
          // если comment null, значит в Entities/Entities данных нет, мы работает с SSR
          // нам надо отрисовать данные используя API
          this.needRequestToAPI = true;
        }

        return this.$context.changed();
      })
  }
}

module.exports = CommentsEntityComment;
