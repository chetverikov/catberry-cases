class ActivePage {
  load() {
    return this.$context.getStoreData('Pages')
      .then(pages => {
        let {pageName} = this.$context.state;

        pageName = pageName || 'entity';

        return pages.find(page => page.name === pageName);
      });
  }
}

module.exports = ActivePage;