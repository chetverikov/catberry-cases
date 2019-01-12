class EntitiesEntity {

  /**
   * Loads data from somewhere.
   * @returns {Object} Data object.
   */
  load() {
    return {
      name: 'et iusto odio',
      description: 'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. recusandae. Itaque earum rerum hic tenetur a sapien perferendis doloribus asperiores repellat.',
      author: 'Cicero',
      created: Date.now()
    };
  }
}

module.exports = EntitiesEntity;
