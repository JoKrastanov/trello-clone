require('dotenv').config();
const port = process.env.port || 3000;

const express = require('express')
const mongoose=require('mongoose');
const cors = require('cors');

const listRouter = require('./routers/lists')

const app=express();
const db=mongoose.connection;
app.use(express.json())

app.use(cors({
    origin: ['*']
}));

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true});
db.on('error', (error)=> console.error(error));
db.once('open', ()=> console.error('Connected to MongoDB cloud'));

app.use('/lists', listRouter)

app.listen(port, () => {console.log(`Back end is running on port: ${port}`)});

