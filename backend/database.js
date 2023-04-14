import mongoose from "mongoose";

export const connectDB = async () => {
  const { connection } = await mongoose.connect('mongodb://localhost:27017/erp');
  console.log(`MongoDB connected with ${connection.host}`);
};