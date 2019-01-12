class ComponentsMenu {
  render() {
    return this.$context.getStoreData()
      .then(items =>
        `
          <ul class="menu">
            ${items.map(item => 
              `<li class="menu-item ${item.active && 'menu-item-active'}">
                 <a href="${item.href}"><span>${item.title}</span></a>
               </li>
            `)}
          </ul>
        `
      )
  }
}

module.exports = ComponentsMenu;

