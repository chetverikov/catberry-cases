class LayoutsEntities {
  render() {
    return this.$context.getStoreData()
      .then(entities => entities
        .map((entity, index) => `<cat-layouts-entity cat-store="Entities/Entities" entity-index="${index}"></cat-layouts-entity>`)
        .join('')
      );
  }
}

module.exports = LayoutsEntities;
