const express = require('express');
const app = express();
const cors = require('cors');
const controller = require('./controllers/controller1');

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/items', (req, res) => {
    controller.getItems(items => {
        res.send(items);
    });
});

app.post('/additem', (req, res) => {
    controller.addItem(req.body, callback => {
        res.send(callback);
    });
});

app.post('/updateitem', (req, res) => {
    controller.updateItem(req.body, callback => {
        res.send(callback);
    });
});

app.post('/deleteitem', (req, res) => {
    controller.deleteItem(req.body, callback => {
        res.send(callback);
    });
});

module.exports = app;
