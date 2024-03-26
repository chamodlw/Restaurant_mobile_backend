const Item = require('../models/model1');

const getItems = (req, res, next) => {
    Item.find()
        .then(response => {
            res.json({ response });
        })
        .catch(error => {
            res.json({ message: error });
        });
};

const addItem = (req, res, next) => {
    const item = new Item({
        id: req.body.id,
        name: req.body.name,
        price: req.body.price
    });
    item.save()
        .then(response => {
            res.json({ response });
        })
        .catch(error => {
            res.json({ error });
        });
};

const updateItem = (req, res, next) => {
    const { id, name, price } = req.body;
    Item.updateOne({ id: id }, { $set: { name: name, price: price } })
        .then(response => {
            res.json({ response });
        })
        .catch(error => {
            res.json({ error });
        });
};

const deleteItem = (req, res, next) => {
    const id = req.body.id;
    Item.deleteOne({ id: id })
        .then(response => {
            res.json({ response });
        })
        .catch(error => {
            res.json({ error });
        });
};

exports.getItems = getItems;
exports.addItem = addItem;
exports.updateItem = updateItem;
exports.deleteItem = deleteItem;
