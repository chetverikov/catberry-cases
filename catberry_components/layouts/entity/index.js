class LayoutsEntity {
  render() {
    return this.$context.getStoreData()
      .then(entity =>
        `
          <style>
              cat-layouts-comments {
                  display: block;
                  margin-left: 40px;
              }        
          </style>
          <a href="/entities/${entity.id}"><cat-components-title title="${entity.name}"></cat-components-title></a> 
          (<cat-components-author author="${entity.author}"></cat-components-author>)
          <div class="description">
            ${entity.description}
          </div>
          <cat-components-datatime datatime="${entity.created}" format="d-m-Y"></cat-components-datatime>
          ${Array.isArray(entity.comments) && entity.comments.length && `<br /><br /><cat-layouts-comments cat-store="Comments/EntityComments" cat-param-entity-id="${entity.id}"></cat-layouts-comments>`}
        `
      );
  }
}

module.exports = LayoutsEntity;
