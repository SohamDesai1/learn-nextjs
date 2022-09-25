import mongoose, { model } from 'mongoose';

const loginDetailsSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
},{timestamps: true}); 
mongoose.models = {}
export default mongoose.model('LoginDetails', loginDetailsSchema);
