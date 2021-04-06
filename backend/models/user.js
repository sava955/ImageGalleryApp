const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    avatar: { type: String, required: true },
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    galleries: [{ type: Schema.Types.ObjectId, ref: 'Gallery' }],
    images: [{ type: Schema.Types.ObjectId, ref: 'Image' }],
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment '}],
    createdAt: { type: Date, default: Date.now() }
});

module.exports = mongoose.model('User', userSchema);