'use strict';

const map = (pageName) => {
  return (state) => {
    state.ActivePage = state.ActivePage || {};
    state.ActivePage.pageName = pageName;

    return state;
  }
};

module.exports = [
  {
    name: 'entities',
    expression: '/',
    map: map('entities')
  },
  {
    name: 'entities',
    expression: '/entities',
    map: map('entities')
  },
  {
    name: 'entity',
    expression: '/entities/:entityId[Entities/Entity]',
    map: map('entity')
  }
];

