import mongoose from 'mongoose'

const quoteSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    phone: {type: String, required: true},
    project_title: {type: String, required: true},
    project_details: {type: String, required: true},
    project_budget: {type: Number, required: true}
}, {timestamps: true})

const Quote = mongoose.models?.Quote || mongoose.model('Quote', quoteSchema);
export default Quote;