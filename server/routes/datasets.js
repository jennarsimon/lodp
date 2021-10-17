const router = require('express').Router();
let Dataset = require('../models/dataset.model');

router.route('/').get((req, res) => {
    Dataset.find()
        .then(datasets => res.json(datasets))
        .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/:name').get((req, res) => {
    Dataset.findOne({ name: req.params.name }, function(err, dataset) {
        if(err){
            console.log(err);
            res.status(500).send("Error with finding dataset");
            return;
        }
        else if(!dataset){
            res.status(404).send("Dataset does not exist");
            return;
        }
        res.send(dataset);
    })
})

module.exports = router;