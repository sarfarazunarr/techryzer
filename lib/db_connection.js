import mongoose from "mongoose";
const connectString = process.env.MONGOURI
export async function connectDB(){
    if (mongoose.connections[0].readyState) return;
    await mongoose.connect(connectString)
    return true;
}