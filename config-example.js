const mongoose = require('mongoose');

async function mongooseConnect() {
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function() {
    console.log('connected');
  });

  await mongoose.connect('<database_url>', {useNewUrlParser: true});
};

module.exports = mongooseConnect;
