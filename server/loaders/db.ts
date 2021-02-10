import mongoose from 'mongoose';

import configs from '../configs';

const dbLoader = () => {
  mongoose.connect(configs.databaseURL as string, configs.mongooseOptions);

  mongoose.connection.on('error', () => console.error('connection error'));
  mongoose.connection.once('open', () => console.log('mongoose is connected'));
};

export default dbLoader;
