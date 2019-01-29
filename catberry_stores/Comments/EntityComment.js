const fetch = require('node-fetch');

class CommentsEntityComment {

  constructor() {
    if (this.$context.isBrowser) {
      window.stores = window.stores || {};
      window.stores[this.$context.instanceId] = this;
    }
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
      // или загрузит данные с сервера, если данных нет (например при ssr)
      .then(() => this.$context.sendAction('Entities/Entities', 'CommentHasBeenUpdated', {commentId, text}))
      .then(comment => {
        // если вернулся comment, значит в Entities/Entities были данные и там просто обновился cache
        if (comment) {
          // нам надо отрисовать данные по новой
          this.$context.changed();
        }
      })
  }
}

module.exports = CommentsEntityComment;
