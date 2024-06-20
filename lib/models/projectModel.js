import mongoose from "mongoose";

const projectModel = new mongoose.Schema({
    title: {type: String, required: true},
    category: {type: String, required: true},
    client: {type: String, required: true},
    clientId: {type: mongoose.Types.ObjectId, required: true},
    description: {type: String, required: true},
    status: {type: String, default: "Pending"},
    budget: {type: Number, required: true},
    paidAmount: {type: Number, default: 0},
    startingDate: {type: Date, default: Date.now()},
    deadline: {type: String, required: true},
    completion: {type: Number, default: 0}
})

const Project = mongoose.models.Project || mongoose.model('Project', projectModel);
export default Project;