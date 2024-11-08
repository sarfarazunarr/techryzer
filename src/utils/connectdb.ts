import mongoose from "mongoose";

const ConnectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGOURI || "");
        console.log('DB CONNECTED')
    } catch (error) {
        console.log(error)
        process.exit(1);
    }
}

export default ConnectDB;