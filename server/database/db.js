import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DP_PASSWORD;

const Connection = async () => {
  const URL =
    `mongodb://${USERNAME}:${PASSWORD}@ac-ekjaruc-shard-00-00.hpuhmey.mongodb.net:27017,ac-ekjaruc-shard-00-01.hpuhmey.mongodb.net:27017,ac-ekjaruc-shard-00-02.hpuhmey.mongodb.net:27017/?ssl=true&replicaSet=atlas-fc16mo-shard-0&authSource=admin&retryWrites=true&w=majority`;
  try {
    await mongoose.connect(URL, { useUnifiedTopology: true });
    console.log('Database connected Succesfully')
  } catch (error) {
    console.log('Error connecting Database ', error.message);
  }
}
export default Connection;
