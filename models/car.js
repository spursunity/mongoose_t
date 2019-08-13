const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({ brand: 'string', year: 'number' });
const Car = mongoose.model('Car', carSchema);

module.exports = Car;
