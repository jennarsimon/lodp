const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, {
    useNewUrlParser: true
});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB datase connection established successfully");
})

const dataRouter = require('./routes/datasets');
app.use('/datasets', dataRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})