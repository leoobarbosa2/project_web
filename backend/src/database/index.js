const mongoose = require('mongoose');

function database() {
  return mongoose.connect(
    'mongodb+srv://leonardo:reactnode@cluster0-knyht.gcp.mongodb.net/test?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
}

module.exports = database;
