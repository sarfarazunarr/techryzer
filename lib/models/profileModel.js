import mongoose from "mongoose";
const Schema = mongoose.Schema;
const profileSchema = new Schema({
    userid: {
        type: mongoose.Types.ObjectId,
        ref: 'users'
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    industry: {
        type: String
    },
    projects: {
        type: Number,
        default: 0
    },
    payment: {
        type: Number,
        default: 0
    }
})

const Profile = mongoose.models.Profile || mongoose.model('Profile', profileSchema);
export default Profile;