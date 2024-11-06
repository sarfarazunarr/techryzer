import mongoose from 'mongoose'

const projectSchema = new mongoose.Schema({
    title: {type: String, required: true},
    short_description: {type: String, required: true},
    content: {type: String, required: true},
    tags: {type: [String], required: true},
    status: {type: String, enum: ["published", "draft"], default: "draft"},
    downloadbtn: {type: String, required: true},
    category: {type: String, required: true}
}, {timestamps: true})

const Project = mongoose.models?.Project || mongoose.model('Project', projectSchema);
export default Project;