class PagesContainer {
  render() {
    return this.$context.getStoreData()
      .then(activePage => `
        <cat-components-menu cat-store="TopMenu"></cat-components-menu>
        <cat-pages-${activePage.name}></cat-pages-${activePage.name}>
      `);
  }
}

module.exports = PagesContainer;
