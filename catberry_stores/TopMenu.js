
class TopMenu {
  constructor() {
    this.$context.setDependency('ActivePage');
  }

  load() {
    return Promise
      .all([
        this.$context.getStoreData('ActivePage'),
        this.$context.getStoreData('Pages')
      ])
      .then(([activePage, pages]) => {
        return pages.map(page => ({
          title: page.title,
          href: page.href,
          active: page.name === activePage.name
        }))
      })
  }
}

module.exports = TopMenu;
