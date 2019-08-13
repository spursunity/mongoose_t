(function m() {
  try {
    const mongooseConnect = require('./config');
    mongooseConnect();
  } catch (e) {
    console.log(e);
  }
})()
