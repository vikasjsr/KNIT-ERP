import mongoose from "mongoose";

export const connectDB = async () => {
  const { connection } = await mongoose.connect('mongodb+srv://vikasjaiswar2140:iamVikas%40123@cluster1.xlr3d08.mongodb.net/erp');
  console.log(`MongoDB connected with ${connection.host}`);
};

// mongodb+srv://vikasjaiswar2140:iamVikas%40123@cluster1.xlr3d08.mongodb.net/