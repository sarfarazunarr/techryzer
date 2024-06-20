import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, requried: true},
    message: {type: String, required: true},
    date: {type: String, default: Date.now()},
    reply: {type: String, default: ''},
    status: {type: String, default: 'unread'}
})

const Message = mongoose.models.Message || mongoose.model('Message', MessageSchema);

export default Message;