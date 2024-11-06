import mongoose from 'mongoose'

const contactSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    phone: {type: String, required: true},
    message: {type: String, required: true},
    status: {type: String, enum: ["Read", "Unread", "Replied"], default: "Unread"}
}, {timestamps: true})

const Contact = mongoose.models?.Contact || mongoose.model('Contact', contactSchema);
export default Contact;