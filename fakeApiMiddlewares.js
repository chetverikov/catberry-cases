const express = require('express');
const faker = require('faker');

const router = new express.Router();

const COUNT_OF_ENTITIES = 5;
const COUNT_OF_COMMENTS = 3;

const entities = new Array(COUNT_OF_ENTITIES)
  .fill(null)
  .map(() => ({
    id: faker.random.uuid(),
    name: faker.lorem.words(),
    description: faker.lorem.paragraph(),
    author: faker.internet.userName(),
    created: faker.date.past(),
    comments: new Array(COUNT_OF_COMMENTS).fill(null)
      .map(() => ({
        id: faker.random.uuid(),
        author: faker.internet.userName(),
        created: faker.date.past(),
        text: faker.lorem.paragraph()
      }))
  }));

const hashOfComments = entities.reduce((hash, entity) => {
  for (const comment of entity.comments) {
    hash[comment.id] = comment;
  }

  return hash;
}, {});

router.get('/entities', (req, res) => {
  res.json(entities);
});

router.get('/entities/:entityId', (req, res) => {
  const entity = entities.find(e => e.id === req.params.entityId);

  if (entity) {
    return res.json(entity);
  }

  res.status(404).send();
});

router.patch('/entities/:entityId', (req, res) => {
  const entity = entities.find(e => e.id === req.params.entityId);

  if (!entity) {
    return res.status(404).send();
  }

  entity.text = req.body.text;

  res.json(entity);
});

router.patch('/comments/:commentId', express.json(), (req, res) => {
  const entity = hashOfComments[req.params.commentId];

  if (!entity) {
    return res.status(404).send();
  }

  entity.text = req.body.text;

  res.json(entity);
});

module.exports = router;