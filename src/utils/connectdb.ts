import mongoose from "mongoose";

const ConnectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGOURI || "");
    } catch (error) {
        process.exit(1);
    }
}

export default ConnectDB;