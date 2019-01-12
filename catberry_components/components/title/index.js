class ComponentsTitle {
  render() {
    const {title} = this.$context.attributes;

    return `<h1>${title}</h1>`;
  }
}

module.exports = ComponentsTitle;

