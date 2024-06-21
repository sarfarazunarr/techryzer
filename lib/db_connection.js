import mongoose from "mongoose";
const connectString = process.env.MONGOURI
export async function connectDB() {
  if (mongoose.connections[0].readyState) return;

  try {
    await mongoose.connect(connectString);
    console.log("MongoDB connected successfully!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    // You can also throw an error to trigger a reaction in your application
    // throw new Error("MongoDB connection failed!");
  }

  return true;
}
