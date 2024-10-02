const express = require('express');
const router = express.Router();
const controller_bill = require('../controllers/controller_bill');

router.get('/bills', controller_bill.getBills);
router.get('/billundermaxid', controller_bill.getBillUnderMaxId);
router.get('/bills/:year/:month', controller_bill.getBillsByMonth);
router.get('/bills/:year/:month/:day', controller_bill.getBillsByDate);
router.post('/addbill', controller_bill.addBill);
router.post('/updatebill', controller_bill.updateBill);
router.post('/deletebill', controller_bill.deleteBill);

module.exports = router;