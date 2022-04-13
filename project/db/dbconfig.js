
//MongoDB connection
const mongoose = require('mongoose');
const mongoURL = 'mongodb+srv://mongoviope:ug9pszLmcRsKLhNa@cluster0.rcsfm.mongodb.net/lootPusher?retryWrites=true&w=majority';
mongoose.connect(mongoURL, { useFindAndModify: false, useNewUrlParser: true , useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error'));

