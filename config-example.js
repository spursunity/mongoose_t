function mongoose() {
  const m = require('mongoose');
  m.connect(/*mongo db url*/, {useNewUrlParser: true});

  return m;
}

module.exports = mongoose;
