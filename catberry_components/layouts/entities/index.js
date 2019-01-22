class LayoutsEntities {
  render() {
    return this.$context.getStoreData()
      .then(entities => entities
        .map((entity) => `<cat-layouts-entity cat-store="Entities/Entity" cat-param-entity-id="${entity.id}"></cat-layouts-entity>`)
        .join('')
      );
  }
}

module.exports = LayoutsEntities;
