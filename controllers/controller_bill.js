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
    const newBill = new Bill({
        id: req.body.id,
        items: req.body.items.map(item => ({
            id: item.id,
            name: item.name,
            price: item.price
        })),
        total: req.body.total
    });
    newBill.save()
        .then(response => {
            res.json({ response });
        })
        .catch(error => {
            res.json({ error });
        });
};

const updateBill = (req, res, next) => {
    const { id, items, total } = req.body;
    Bill.updateOne({ id: id }, { $set: { items: items, total: total } })
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
