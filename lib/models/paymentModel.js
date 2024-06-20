import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
    tid: {type: String, required: true},
    from: {type: String, requried: true},
    clientId: {type: String, required: true},
    project: {type: String, required: true},
    projectId: {type: String,required: true},
    amount: {type: Number, required: true},
    date: {type: Date, required: true},
    isVerified: {type: Boolean, default: false}
})

const Payment = mongoose.models.Payment || mongoose.model('Payment', paymentSchema);

export default Payment;