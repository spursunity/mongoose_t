const mongoose = require('mongoose');

function mongooseConnect() {
  mongoose.connect('<database_url>', {useNewUrlParser: true});

  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function() {
    console.log('connected');
  });
};

module.exports = mongooseConnect;
