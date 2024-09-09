const Bill = require('../models/model_bill');

const getBills = (req, res, next) => {
    Bill.find()
        .then(response => {
            res.json({ response });
        })
        .catch(error => {
            res.json({ message: error });
        });
};

const addBill = (req, res, next) => {
    const Bill = new Bill({
        id: req.body.id,
        total: req.body.total
    });
    Bill.save()
        .then(response => {
            res.json({ response });
        })
        .catch(error => {
            res.json({ error });
        });
};

const updateBill = (req, res, next) => {
    const { id, total} = req.body;
    Bill.updateOne({ id: id }, { $set: { total: total } })
        .then(response => {
            res.json({ response });
        })
        .catch(error => {
            res.json({ error });
        });
};

const deleteBill = (req, res, next) => {
    const id = req.body.id;
    Bill.deleteOne({ id: id })
        .then(response => {
            res.json({ response });
        })
        .catch(error => {
            res.json({ error });
        });
};

exports.getBills = getBills;
exports.addBill = addBill;
exports.updateBill = updateBill;
exports.deleteBill = deleteBill;
