require('dotenv/config');
const mongoose = require('mongoose');

function database() {
  return mongoose.connect(
    `mongodb+srv://${process.env.DATABASE_NAME}:${process.env.DATABASE_PASSWORD}@cluster0-knyht.gcp.mongodb.net/database?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  );
}

module.exports = database;
