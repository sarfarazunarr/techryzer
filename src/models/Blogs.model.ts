import mongoose from 'mongoose'

const blogSchema = new mongoose.Schema({
    title: {type: String, required: true},
    meta_description: {type: String, required: true},
    content: {type: String, required: true},
    tags: {type: [String], required: true},
    status: {type: String, enum: ["published", "draft"], default: "draft"},
    slug: {type: String},
    imgUrl: {type: String},
    author: {type: mongoose.Types.ObjectId, ref: "User", required: true},
    category: {type: String, required: true}
}, {timestamps: true})

const Blog = mongoose.models?.Blog || mongoose.model('Blog', blogSchema);
export default Blog;