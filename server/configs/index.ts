import dotenv from 'dotenv';
dotenv.config();

const configs = {
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

export default configs;
