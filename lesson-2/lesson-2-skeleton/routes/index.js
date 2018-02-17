const express = require('express');
const fetch = require('node-fetch');
const router = express.Router();

const host = 'http://138.68.240.16:3000';
// const host = 'http://localhost:3000/api';

/* GET home page. */
router.get('/', (req, res) => {
    const response = fetch(`${host}/dogs`)
        .then(result => result.json())
        .then(dogs => res.render('index', { dogs }))
        .catch(error => res.render('error', { error }));
});

/* GET Dog detail page */
router.get('/:name', (req, res) => {
  const { name } = req.params;
  const { comment } = req.body;
  return res.render('dog');
});

module.exports = router;
