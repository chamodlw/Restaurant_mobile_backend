const express =require('express');
const app =express();
const cors =require('cors');
const port = 3200;
const host ='localhost';
const mongoose = require('mongoose');
const router = require('./routes/route1');
const router_bill = require('./routes/router_bill');

app.use(cors());
app.use(express.json());

const uri = 'mongodb+srv://wlakshan888:resturant1@resturant1.r62ncwn.mongodb.net/';

const connect = async () =>{
    try{
        await mongoose.connect(uri);
        console.log('Connect to MongoDB');
    }
    catch(error){
        console.log('MongoDB Error' , error)
    }
}

connect();

const server = app.listen(port, host,() =>{
    console.log('Node server is listening to ${server.address().port}')
});

app.use('/api',router);
app.use('/api',router_bill);