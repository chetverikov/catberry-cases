class ComponentsAuthor {
  render() {
    const {author} = this.$context.attributes;

    return `<span class="author">by ${author}</span>`;
  }
}

module.exports = ComponentsAuthor;

