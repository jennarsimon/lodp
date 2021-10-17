const router = require('express').Router();
let Dataset = require('../models/dataset.model');

router.route('/').get((req, res) => {
    Dataset.find()
        .then(datasets => res.json(datasets))
        .catch(err => res.status(400).json('Error: ' + err));
})

module.exports = router;