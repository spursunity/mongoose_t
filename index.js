const mongoose = require('./config.js')();

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('iiiiiiiu');
});