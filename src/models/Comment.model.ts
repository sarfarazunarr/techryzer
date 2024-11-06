import mongoose from 'mongoose'

const commentSchema = new mongoose.Schema({
    blogId: {type: mongoose.Types.ObjectId, ref: "Blog"},
    username: {type: String, required: true},
    comment: {type: String, required: true}
}, {timestamps: true})

const Comment = mongoose.models?.Comment || mongoose.model('Comment', commentSchema);
export default Comment;