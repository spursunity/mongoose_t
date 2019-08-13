(async function m() {
  try {
    const mongooseConnect = require('./config');
    const Car = require('./models/car');

    await mongooseConnect();
    const response = await Car.create({ brand: 'Audi', year: 2011 });
    console.log(response);
  } catch (e) {
    console.log(e);
  }
})()
