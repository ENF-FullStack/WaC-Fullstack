const express = require('express');
const bodyParser = require('body-parser');
const routes = require("./routes");

const app = express();
app.use(bodyParser.json());
app.use('/', routes);

//MongoDB connection
const mongoose = require('mongoose');
const mongoURL = 'mongodb+srv://mongoviope:ug9pszLmcRsKLhNa@cluster0.rcsfm.mongodb.net/moviedb?retryWrites=true&w=majority';
mongoose.connect(mongoURL, { useFindAndModify: false, useNewUrlParser: true , useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error'));

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});