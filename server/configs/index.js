require('dotenv').config();

module.exports = {
  databaseURL: process.env.MONGODB_URL,
  mongooseOptions: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  },
  corsOptions: {
    origin: process.env.ORIGIN_URL,
    optionsSuccessStatus: 200,
  },
}
