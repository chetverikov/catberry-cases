const DEFAULT_CRUMBS = [['Index', '/'], ['Entities', '/entities'], ['Entity', '/entity']];

class ComponentsBreadcrumbs {
  render() {
    const crumbs = this.$context.attributes.crumbs || DEFAULT_CRUMBS;

    return `
      <ul class="breadcrumbs">
        ${crumbs.map(([crumb, href]) => `<li class="breadcrumb"><a href="${href}"><span>${crumb}</span></a></li>`)}
      </ul>
    `;
  }
}

module.exports = ComponentsBreadcrumbs;

