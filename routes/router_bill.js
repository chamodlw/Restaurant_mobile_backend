const express = require('express');
const router = express.Router();
const controller_bill = require('../controllers/controller_bill');

router.get('/bills', controller_bill.getBills);
router.post('/addbill', controller_bill.addBill);
router.post('/updatebill', controller_bill.updateBill);
router.post('/deletebill', controller_bill.deleteBill);

module.exports = router;