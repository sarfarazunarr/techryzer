import mongoose from 'mongoose'

const reviewSchema = new mongoose.Schema({
    name: {type: String, required: true},
    review: {type: String, required: true},
    stars: {type: Number, max: 5, min: 0, required: true},
    img: {type: String, required: true}
}, {timestamps: true})

const Review = mongoose.models?.Review || mongoose.model('Review', reviewSchema);
export default Review;