(async function m() {
  try {
    const Car = require('./models/car');
    const mongooseConnect = require('./config');
    await mongooseConnect();

    // const response = await Car.find({});
    const response = await Car.findOne({});
    console.log(response);
  } catch (e) {
    console.log(e);
  }
})()
