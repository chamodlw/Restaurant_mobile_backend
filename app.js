const express = require('express');
const app = express();
const cors = require('cors');
const controller = require('./controllers/controller1');
const controller_bill = require('./controllers/controller_bill');

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

app.get('/bills', (req, res) => {
    controller_bill.getBills(bills => {
        res.send(bills);
    });
});

app.get('/billundermaxid', (req, res) => {
    controller_bill.getBillUnderMaxId(bill => {
        res.send(bill);
    });
});

app.get('/bills/:year', (req, res) => {
    controller_bill.getBillsByYear(req.params, bills => {
        res.send(bills);
    });
});

app.get('/bills/:year/:month', (req, res) => {
    controller_bill.getBillsByMonth(req.params, bills => {
        res.send(bills);
    });
});

app.get('/bills/:year/:month/:day', (req, res) => {
    controller_bill.getBillsByDate(req.params, bills => {
        res.send(bills);
    });
});

app.post('/addbill', (req, res) => {
    controller_bill.addBill(req.body, callback => {
        res.send(callback);
    });
});

app.post('/updatebill', (req, res) => {
    controller_bill.updateBill(req.body, callback => {
        res.send(callback);
    });
});

app.post('/deletebill', (req, res) => {
    controller_bill.deleteBill(req.body, callback => {
        res.send(callback);
    });
});

module.exports = app;
