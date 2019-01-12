class LayoutsEntity {
  render() {
    return this.$context.getStoreData()
      .then(data => {
        if (Array.isArray(data)) {
          const index = this.$context.attributes['entity-index'] || 0;

          return data[index];
        } else {
          return data;
        }
      })
      .then(entity => `
        <cat-components-title title="${entity.name}"></cat-components-title> 
        (<cat-components-author author="${entity.author}"></cat-components-author>)
        <div class="description">
          ${entity.description}
        </div>
        <cat-components-datatime datatime="${entity.created}" format="d-m-Y"></cat-components-datatime>
      `);
  }
}

module.exports = LayoutsEntity;
