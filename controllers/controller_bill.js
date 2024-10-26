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

const getBillUnderMaxId = (req, res, next) => {
    Bill.findOne().sort({ id: -1 }).limit(1)
        .then(response => {
            if (response) {
                res.json({ response });
            } else {
                res.json({ message: 'No bills found.' });
            }
        })
        .catch(error => {
            res.json({ error });
        });
};

const getBillsByYear = (req, res, next) => {
    const { year } = req.params; // Get year  from the request parameters

    // Create a date range for the month of the given year
    const startDate = new Date(`${year}-01-01`);
    const endDate = new Date(startDate);   
    endDate.setFullYear(startDate.getFullYear() + 1); // Move to the first day of the next year

    // Find bills where the date_time falls within the specified year
    Bill.find({
        'date_time': {
            $gte: startDate,
            $lt: endDate
        }
    })
        .then(response => {
            res.json({ response });
        })
        .catch(error => {
            res.json({ message: error });
        });
    
};

const getBillsByMonth = (req, res, next) => {
    const { year, month } = req.params; // Get year and month from the request parameters

    // Create a date range for the month of the given year
    const startDate = new Date(`${year}-${month}-01`);
    const endDate = new Date(startDate);
    endDate.setMonth(startDate.getMonth() + 1); // Move to the first day of the next month

    // Find bills where the date_time falls within the specified month
    Bill.find({
        'date_time': {
            $gte: startDate,
            $lt: endDate
        }
    })
        .then(response => {
            res.json({ response });
        })
        .catch(error => {
            res.json({ message: error });
        });
};

const getBillsByDate = (req, res, next) => {
    let { year, month, day } = req.params;

    // Pad month and day with leading zeros if necessary
    month = month.padStart(2, '0');
    day = day.padStart(2, '0');

    // Create the start and end of the specific date
    const startDate = new Date(`${year}-${month}-${day}T00:00:00.000Z`);
    const endDate = new Date(`${year}-${month}-${day}T23:59:59.999Z`);

    // Find bills where the date_time falls within the specified day
    Bill.find({
        'date_time': {
            $gte: startDate,
            $lt: endDate
        }
    })
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
        date_time: req.body.date_time,
        items: req.body.items.map(item => ({
            id: item.id,
            name: item.name,
            price: item.price,
            quantity: item.quantity
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
exports.getBillUnderMaxId = getBillUnderMaxId;
exports.getBillsByYear = getBillsByYear;
exports.getBillsByMonth = getBillsByMonth;
exports.getBillsByDate = getBillsByDate;
exports.addBill = addBill;
exports.updateBill = updateBill;
exports.deleteBill = deleteBill;
