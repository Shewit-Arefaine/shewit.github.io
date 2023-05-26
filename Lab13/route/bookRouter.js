const express = require('express');
const bookController = require('../controller/bookController');

const router = express.Router();

router.post('/',bookController.save);
router.get('/',bookController.getAll);
router.delete('/:id',bookController.deletById);
router.put('/:id',bookController.edit);

module.exports = router ;
