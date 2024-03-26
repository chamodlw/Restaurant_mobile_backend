const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller1');

router.get('/items', controller.getItems);
router.post('/additem', controller.addItem);
router.post('/updateitem', controller.updateItem);
router.post('/deleteitem', controller.deleteItem);

module.exports = router;
